import React from "react";
import Navbar from "../components/Navbar";
import CardNavigue from "../components/CardNavigue"; // Importation du composant Card
import styles from "../pages/HomePage.module.css";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />     
        {/* En-tête de la page */}
        <h1>Lukamba Kasa</h1>
        <h2>BIENVENUE SUR MON PORTFOLIO</h2>
        {/* Intégration du composant Card */}
        <CardNavigue />
        
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
