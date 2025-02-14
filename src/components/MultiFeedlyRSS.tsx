import { useEffect, useState } from "react";

interface Article {
  title: string;
  link: string;
  description: string;
  source: string;
}

interface MultiFeedlyRSSProps {
  feedUrls: string[];
}

const MultiFeedlyRSS: React.FC<MultiFeedlyRSSProps> = ({ feedUrls }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedSource, setSelectedSource] = useState<string>("all");

  useEffect(() => {
    const fetchAllRSS = async () => {
      let allArticles: Article[] = [];

      for (const feedUrl of feedUrls) {
        try {
          const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`);
          const data = await response.json();
          const parser = new DOMParser();
          const xml = parser.parseFromString(data.contents, "text/xml");
          const items = xml.querySelectorAll("item");

          const parsedArticles: Article[] = Array.from(items).map((item) => ({
            title: item.querySelector("title")?.textContent || "Sans titre",
            link: item.querySelector("link")?.textContent || "#",
            description: item.querySelector("description")?.textContent || "",
            source: feedUrl,
          }));

          allArticles = [...allArticles, ...parsedArticles];
        } catch (error) {
          console.error(`Erreur lors de la récupération du flux RSS : ${feedUrl}`, error);
        }
      }

      setArticles(allArticles);
    };

    fetchAllRSS();
  }, [feedUrls]);

  return (
    <div>
      <h2>Mon Fil d'Actualités</h2>

      <select onChange={(e) => setSelectedSource(e.target.value)} value={selectedSource}>
        <option value="all">Toutes les sources</option>
        {feedUrls.map((url, index) => (
          <option key={index} value={url}>
            {url}
          </option>
        ))}
      </select>

      <ul>
        {articles
          .filter((article) => selectedSource === "all" || article.source === selectedSource)
          .map((article, index) => (
            <li key={index}>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MultiFeedlyRSS;