import React from "react";
import MultiFeedlyRSS from "../components/MultiFeedlyRSS";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./VeilleTechnologique.module.css"; // à créer pour styliser cette page si nécessaire

const VeilleTechnologique: React.FC = () => {
  const feedUrls = [
    "https://www.actuia.com/feed/",
    "https://www.01net.com/rss/actualites/",
    "https://www.zdnet.fr/actualites/rss/",
    "https://www.lemonde.fr/technologies/rss_full.xml",
    "https://www.village-justice.com/rss/articles.xml",
    "https://www.numerama.com/feed/",

  ];

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Veille Technologique</h1>
        <p className={styles.intro}>
        Dans le cadre de ma formation en développement, je réalise une veille technologique
        régulière autour de sujets clés comme l’intelligence artificielle, la cybersécurité
        ou encore les nouvelles tendances du web. Voici une sélection d’articles issus de
        sources fiables que je consulte quotidiennement.
        </p>
        <MultiFeedlyRSS feedUrls={feedUrls} />
      </main>
      <Footer />
    </div>
  );
};

export default VeilleTechnologique;