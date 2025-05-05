import React from 'react';
import styles from './Footer.module.css';
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Section gauche */}
        <div className={styles.left}>
          <p>Copyright © {new Date().getFullYear()} MonPortfolio. Tous droits réservés.</p>
        </div>

        {/* Section centrale - Liens de navigation */}
        <div className={styles.center}>
          <nav>
            <ul className={styles.navList}>
              <li><a href="/" className={styles.navLink}>Accueil</a></li>
              <li><a href="/about" className={styles.navLink}>À propos</a></li>
              <li><a href="/projects" className={styles.navLink}>Projets</a></li>
              <li><a href="/contact" className={styles.navLink}>Contact</a></li>
            </ul>
          </nav>
        </div>

        {/* Section droite - Réseaux sociaux */}
        <div className={styles.right}>
          <a href="https://github.com/Ostronger" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub <VscGithubInverted /></a>
          <a href="https://www.linkedin.com/in/lukamba-aristote-kasa-577594324/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn <FaLinkedin /></a>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;