import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import routes from '../routes'; 
import Lune from '../assets/icon/dark_mode.svg';
import Light from '../assets/icon/light_mode.svg';
import Lightwhite from '../assets/icon/light_mode_2.svg';
import LuneWhite from '../assets/icon/dark_mode_2.svg';
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
            {routes
              .filter(route => route.label !== '404') 
              .map(({ path, label }) => (
                <Link 
                  key={path} 
                  to={path} 
                  className={`${styles.menuItem} ${location.pathname === path ? styles.activeLink : ''}`} 
                  onClick={() => setIsMenuOpen(false)} 
                >
                  {label}
                </Link>
            ))}
            
        </div>

        {/* Bouton pour changer le thème */}
        <div className={styles.right}>
          <div className={styles.toggleContainer}>
            <img 
            src={isDarkMode ? Lightwhite : Light} 
            alt="mode jour" 
            className={styles.icon} />
            <button 
            className={`${styles.toggleButton} ${isDarkMode ? styles.active : ''}`} 
            onClick={toggleTheme} 
            aria-label="Basculer le mode jour/nuit"
            >
              <div className={styles.slider}></div>
            </button>
            <img 
            src={isDarkMode ? LuneWhite : Lune} 
            alt="mode nuit" 
            className={styles.icon} /> 
          </div>
        </div>   
     </nav>
    );
}
    
export default Navbar;