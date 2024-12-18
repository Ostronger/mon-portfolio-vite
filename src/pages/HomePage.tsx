import React from 'react';
import Navbar from '../components/Navbar';
import CardNavigue from '../components/CardNavigue'; // Importation du composant Card
import styles from '../pages/HomePage.module.css';



const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.pageContent}>
      
      {/* En-tête de la page */}
        <h1>MON PRENOM</h1>
        <h2>
          BIENVENUE SUR MON PORTFOLIO
        </h2>

         {/* Intégration du composant Card */}
          <CardNavigue />
      </div>
    </div>
  );
};

export default HomePage;