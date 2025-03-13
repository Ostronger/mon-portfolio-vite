import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
        <h1>À propos de moi</h1>
        {/* 1️⃣ Introduction */}
        <section>
        <h2>Qui suis-je ?</h2>
        <p>
          Étudiant en <strong>BTS SIO option SLAM</strong>, je suis passionné par les
          nouvelles technologies et en reconversion professionnelle vers le développement
          fullstack. Mon objectif est de trouver une <strong>alternance pour 2025-2026 </strong>
          et poursuivre mes études après mon BTS.
        </p>
      </section>
      
      {/* 2️⃣ Parcours Académique */}
      <section className={styles.section}>
      <div className={styles.contentWrapper}>
      <img src="https://picsum.photos/150" alt="Image aléatoire" className={styles.sectionImage} />
        <div>
        <h2>📚 Parcours Académique</h2>
          <p><strong>BTS SIO, option SLAM</strong> - Groupe GEFOR (2024-2025)</p>
          <p><strong>Licence en Administration Économique et Sociale</strong> - Nanterre Université (2014)</p>
          <p><strong>Baccalauréat Scientifique</strong> - Lycée Jean Jaurès (2009)</p>
        </div>
      </div>
      </section>
      
      {/* 3️⃣ Expériences Professionnelles */}
      <section className={`${styles.section} ${styles.sectionAlternate}`}>
      <div className={`${styles.contentWrapper} ${styles.alternate}`}>
      <img src="https://picsum.photos/150" alt="Image aléatoire" className={styles.sectionImage} />
        <div>
        <h2>💼 Expériences Professionnelles</h2>
          <p>
            <strong>Stage - Développeur Fullstack</strong>
            <p>Expérience en développement web et intégration.</p>
          </p>
          <p>
            <strong>Stage - Intégrateur Web</strong>
            <p>Travail sur des interfaces utilisateur et mise en place de maquettes.</p>
          </p>
          <p>
            <strong>Py Facility (ex-ITIREMIA) - Gestionnaire de Trafic</strong>
            <p>Management d’équipe, gestion client et coordination.</p>
          </p>
          <p>
            <strong>Refectory - Préparateur de Commandes</strong>
            <p>Organisation et logistique des livraisons.</p>
          </p>
        </div>
      </div>
      </section>

      {/* 4️⃣ Compétences Techniques */}
      <section className={styles.section}>
      <div className={styles.contentWrapper}>
      <img src="https://picsum.photos/150" alt="Image aléatoire" className={styles.sectionImage} />
        <div className={styles.skillsList}>
        <h2>🛠️ Compétences Techniques</h2>
          <p><strong>Langages :</strong> HTML, CSS, JavaScript, TypeScript, PHP, Python, SQL</p>
          <p><strong>Frameworks :</strong> React, Flutter, Nest.js, Symfony</p>
          <p><strong>Outils :</strong> Figma, VS Code, Docker, Android Studio, Xcode</p>
          <p><strong>Méthodologies :</strong> Scrum</p>
        </div>
        </div>
      </section>
      
      {/* 5️⃣ Centres d'Intérêt */}
      <section className={`${styles.section} ${styles.sectionAlternate}`}>
      <div className={`${styles.contentWrapper} ${styles.alternate}`}>
      <img src="https://picsum.photos/150" alt="Image aléatoire" className={styles.sectionImage} />
        <div>
        <h2>🎯 Centres d'Intérêt</h2>
          <p>Passion pour les nouvelles technologies</p>
          <p>Développement personnel et apprentissage autodidacte</p>
          <p>Équilibre entre vie professionnelle et personnelle</p>
        </div>
        </div>
      </section>
       
       {/* 6️⃣ Contact */}
       <section className={styles.section}>
       <div className={styles.contentWrapper}>
       <img src="https://picsum.photos/150" alt="Image aléatoire" className={styles.sectionImage} />
        <div>
        <h2>📩 Contact & Réseaux</h2>
        <p>Retrouvez-moi sur LinkedIn et GitHub.</p>
        </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
