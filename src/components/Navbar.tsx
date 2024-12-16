import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css'

const Navbar: React.FC = () =>  {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
    };

    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        // Récupérer le thème depuis le localStorage ou définir par défaut "light"
        return localStorage.getItem('theme') === 'dark';
      });
    
      // Fonction pour basculer entre Jour et Nuit
      const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        document.body.className = newTheme ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      };
    
      // Appliquer le thème au chargement initial
      useEffect(() => {
        document.body.className = isDarkMode ? 'dark' : 'light';
      }, [isDarkMode]);


    return (
      <nav className={styles.container}>

        {/* Logo affiché uniquement sur mobile */}
        <div className={styles.logo}>
          {/* Bouton hamburger */}
        <button className={styles.hamburger} onClick={toggleMenu}>
            ☰
        </button>
          Menu</div>

         {/* Menu principal */}
        <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
           <p>Accueil</p>
           <p>A propos</p> 
           <p>BTS SIO</p>
           <p>Projet</p>
           <p>Veille technologique</p>
           <p>Contact</p>
            {/* Bouton pour changer le thème */}
           <button className={styles.themeToggle} onClick={toggleTheme}>
        {isDarkMode ? '☀️' : '🌙'}
      </button>
        </div>
       
     </nav>
    );
}
    
export default Navbar;    