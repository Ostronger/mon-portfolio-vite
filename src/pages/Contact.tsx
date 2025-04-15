import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Me contacter</h1>
        <p className={styles.intro}>
          Si vous avez des questions ou des suggestions, n’hésitez pas à m'envoyer un message.
        </p>

        <form 
        name="contact"
        method="POST"
        action="/success"
        data-netlify="true"
        className={styles.form}>

            <input type="hidden" name="form-name" value="contact" />

          <label htmlFor="name">Nom et prénom</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Votre nom et prénom"
            required
          />

          <label htmlFor="email">Votre adresse email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="exemple@email.com"
            required
          />

          <label htmlFor="message">Votre message (5000 caractères maximum)</label>
          <textarea
            id="message"
            name="message"
            maxLength={5000}
            placeholder="Votre message ici..."
            required
          ></textarea>

          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.submitButton}>
                Envoyer
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;