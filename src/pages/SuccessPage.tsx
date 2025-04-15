import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./SuccessPage.module.css";

const SuccessPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Merci pour votre message !</h1>
        <p className={styles.text}>
          Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.
        </p>
        <a href="/" className={styles.button}>
          Retour à l'accueil
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessPage;