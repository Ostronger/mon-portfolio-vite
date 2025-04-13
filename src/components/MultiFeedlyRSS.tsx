import { useEffect, useState } from "react";
import styles from "./MultiFeedlyRSS.module.css";

interface Article {
  title: string;
  link: string;
  description: string;
  source: string;
  image?: string;
}

interface MultiFeedlyRSSProps {
  feedUrls: string[];
}

const MultiFeedlyRSS: React.FC<MultiFeedlyRSSProps> = ({ feedUrls }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedSource, setSelectedSource] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const fetchAllRSS = async () => {
      let allArticles: Article[] = [];

      for (const feedUrl of feedUrls) {
        try {
          const response = await fetch(
            `https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`
          );
          const data = await response.json();
          const parser = new DOMParser();
          const xml = parser.parseFromString(data.contents, "text/xml");
          const items = xml.querySelectorAll("item");

          const parsedArticles: Article[] = Array.from(items).map((item) => {
            const description = item.querySelector("description")?.textContent || "";
            const enclosure = item.querySelector("enclosure");
            const media = item.getElementsByTagName("media:content")[0];
            const mediaAlt = item.getElementsByTagName("media:thumbnail")[0];
            const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
          
            const imageUrl =
              enclosure?.getAttribute("url") ||
              media?.getAttribute("url") ||
              mediaAlt?.getAttribute("url") ||
              imgMatch?.[1] ||
              "";

            return {
              title: item.querySelector("title")?.textContent || "Sans titre",
              link: item.querySelector("link")?.textContent || "#",
              description,
              source: feedUrl,
              image: imageUrl,
            };
          });

          allArticles = [...allArticles, ...parsedArticles];
        } catch (error) {
          console.error(`Erreur de chargement RSS : ${feedUrl}`, error);
        }
      }

      setArticles(allArticles);
    };

    fetchAllRSS();
  }, [feedUrls]);

  return (
    <div className={styles.container}>
      

      <select
        className={styles.dropdown}
        onChange={(e) => setSelectedSource(e.target.value)}
        value={selectedSource}
      >
        <option value="all">Toutes les sources</option>
        {feedUrls.map((url, index) => (
          <option key={index} value={url}>
            {new URL(url).hostname}
          </option>
        ))}
      </select>

      <div className={styles.feedList}>
        {articles
          .filter((article) => selectedSource === "all" || article.source === selectedSource)
          .slice(0, visibleCount)
          .map((article, index) => (
            <div key={index} className={styles.card}>
              {article.image && (
                <img src={article.image} alt={article.title} className={styles.image} />
              )}
              <div className={styles.cardContent}>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <h3>{article.title}</h3>
                </a>
              </div>
            </div>
          ))}
      </div>
      {(visibleCount < articles.length || visibleCount > 10) && (
            <div className={styles.buttonsContainer}>
              {visibleCount < articles.length && (
                <button onClick={() => setVisibleCount((prev) => prev + 8)}>
                  Voir plus
                </button>
              )}

              {visibleCount > 10 && (
                <button onClick={() => setVisibleCount((prev) => Math.max(prev - 10, 10))}>
                  Voir moins
                </button>
              )}
            </div>
          )}
    </div>
  );
};

export default MultiFeedlyRSS;