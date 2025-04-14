import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.titrePrincipal}>À propos de moi</h1>
      {/* 1️⃣ Introduction */}
      <section>
        <p className={styles.intro}>
          “Actuellement en formation dans le domaine du développement
          informatique, je suis passionné par les nouvelles technologies et
          motivé par l’apprentissage continu. Je m’oriente vers le développement
          fullstack avec pour ambition de consolider mes compétences au sein
          d’une entreprise en alternance, tout en poursuivant mes études dans ce
          domaine en constante évolution.”
        </p>
      </section>

      {/*  Parcours Académique */}
      <section className={styles.section}>
        <div className={styles.contentWrapper}>
          <img
            src="images/apropos_scolaire.jpg"
            alt="livre en vue"
            className={styles.sectionImage}
          />
          <div>
            <h2>Parcours Académique</h2>
            <p className={styles.paragraphe}>
              <strong>BTS SIO, option SLAM</strong> - Groupe GEFOR (2024-2025)
            </p>
            <p className={styles.paragraphe}>
              <strong>Licence en Administration Économique et Sociale</strong> -
              Nanterre Université (2014)
            </p>
            <p className={styles.paragraphe}>
              <strong>Baccalauréat Scientifique</strong> - Lycée Jean Jaurès
              (2009)
            </p>
          </div>
        </div>
      </section>

      {/* 3️⃣ Expériences Professionnelles */}
      <section className={`${styles.section} ${styles.sectionAlternate}`}>
        <div className={`${styles.contentWrapper} ${styles.alternate}`}>
          <img
            src="images/apropos_expérience.jpg"
            alt="laptop"
            className={styles.sectionImage}
          />
          <div>
            <h2>Expériences Professionnelles</h2>
            <p className={styles.paragraphe}>
              <strong>Stage - Développeur Fullstack</strong>
              <p className={styles.paragraphe}>
                Expérience en développement web et intégration.
              </p>
            </p>
            <p className={styles.paragraphe}>
              <strong>Stage - Intégrateur Web</strong>
              <p className={styles.paragraphe}>
                Travail sur des interfaces utilisateur et mise en place de
                maquettes.
              </p>
            </p>
            <p className={styles.paragraphe}>
              <strong>
                Py Facility (ex-ITIREMIA) - Gestionnaire de Trafic
              </strong>
              <p className={styles.paragraphe}>
                Management d’équipe, gestion client et coordination.
              </p>
            </p>
            <p className={styles.paragraphe}>
              <strong>Refectory - Préparateur de Commandes</strong>
              <p className={styles.paragraphe}>
                Organisation et logistique des livraisons.
              </p>
            </p>
          </div>
        </div>
      </section>

      {/*Compétences Techniques */}
      <section className={styles.section}>
        <div className={styles.contentWrapper}>
          <img
            src="images/apropos_skills.jpg"
            alt="Image des skills"
            className={styles.sectionImage}
          />
          <div className={styles.skillsList}>
            <h2>Compétences Techniques</h2>
            <p className={styles.paragraphe}>
              <strong>Langages :</strong> HTML, CSS, JavaScript, TypeScript,
              PHP, Python, SQL
            </p>
            <p className={styles.paragraphe}>
              <strong>Frameworks :</strong> React, Flutter, Nest.js, Symfony
            </p>
            <p className={styles.paragraphe}>
              <strong>Outils :</strong> Figma, VS Code, Docker, Android Studio,
              Xcode
            </p>
            <p className={styles.paragraphe}>
              <strong>Méthodologies :</strong> Scrum
            </p>
          </div>
        </div>
      </section>

      {/* Centres d'Intérêt */}
      <section className={`${styles.section} ${styles.sectionAlternate}`}>
        <div className={`${styles.contentWrapper} ${styles.alternate}`}>
          <img
            src="images/apropos_interet.jpg"
            alt="Image d'un coureur"
            className={styles.sectionImage}
          />
          <div>
            <h2>Centres d'Intérêt</h2>
            <p className={styles.paragraphe}>
              Passion pour les nouvelles technologies
            </p>
            <p className={styles.paragraphe}>
              Développement personnel et apprentissage autodidacte
            </p>
            <p className={styles.paragraphe}>
              Équilibre entre vie professionnelle et personnelle
            </p>
            <p className={styles.paragraphe}>Sport </p>
          </div>
        </div>
      </section>

      {/* 6️⃣ Contact */}
      <section className={styles.section}>
        <div className={styles.contentWrapper}>
          <img
            src="images/apropos_reseaux.jpg"
            alt="ecran sur des réseaux"
            className={styles.sectionImage}
          />
          <div>
            <h2 className={styles.titre}>Contact & Réseaux</h2>
            <p className={styles.paragraphe}>
              Retrouvez-moi sur LinkedIn et GitHub.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlternate}`}>
        <div className={`${styles.contentWrapper} ${styles.alternate}`}>
          <img
            src="images/apropos_CV.jpg"
            alt="Image d'un CV"
            className={styles.sectionImage}
          />
          <div className={styles.linksGroup}>
            <h2>Mon CV</h2>
            <div className={styles.linkGroup}>
              <a
                href="https://drive.google.com/file/d/1Llc88ZFFtMj0zNbAmWmsnw7RTbYterut/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                Voir mon CV
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
