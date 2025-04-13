import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { navRoutes } from '../routes'; 
import styles from './Navbar.module.css';

const Navbar: React.FC = () =>  {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        // Récupère le mode sombre depuis le localStorage ou utilise "light" par défaut
        return localStorage.getItem('theme') === 'dark';
    });

    const location = useLocation(); 

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen); 
    
    const toggleTheme = () => {
        // Bascule entre le mode clair et sombre
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        document.body.className = newTheme ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    // Applique la classe "dark" ou "light" au body
    useEffect(() => {
        document.body.className = isDarkMode ? 'dark' : 'light'; 
    }, [isDarkMode]);


    return (
      <nav className={styles.container}>

        {/* Logo et bouton hamburger */}
        <div className={styles.left}>
            <button 
              className={styles.hamburger} 
              onClick={toggleMenu}
              aria-label="Ouvrir le menu"
            >
              ☰
            </button>
            <span className={styles.logoText}>MonPortfolio</span>

        </div>

        {/* Menu principal */}
        <div className={`${styles.center} ${isMenuOpen ? styles.menuOpen : ''}`}>
  {/* MonPortfolio => Lien d'accueil, à gauche */}
  <div className={styles.leftMenu}>
    <Link 
      to="/"
      className={`${styles.menuItem} ${location.pathname === '/' ? styles.activeLink : ''}`}
      onClick={() => setIsMenuOpen(false)}
    >
      MonPortfolio
    </Link>
  </div>

  {/* Le reste des liens à droite */}
  <div className={styles.rightMenu}>
    {navRoutes
      .filter(route => route.label !== '404' && route.path !== '/') // Exclut MonPortfolio du reste
      .map(({ path, label }) => (
        <Link 
          key={path} 
          to={path} 
          className={`
            ${styles.menuItem} 
            ${location.pathname === path ? styles.activeLink : ''}
            ${label === 'Contact' ? styles.contactButton : ''}
            `} 
          onClick={() => setIsMenuOpen(false)} 
        >
          {label}
        </Link>
      ))}
  


        {/* Bouton pour changer le thème */}
        
          <div className={styles.toggleContainer}>
          Thème: 
            <button 
            className={`${styles.toggleButton} ${isDarkMode ? styles.active : ''}`} 
            onClick={toggleTheme} 
            aria-label="Basculer le mode jour/nuit"
            >
              <div className={styles.slider}></div>
            </button>
            
            </div>
          </div>
        </div>   
     </nav>
    );
}
    
export default Navbar;