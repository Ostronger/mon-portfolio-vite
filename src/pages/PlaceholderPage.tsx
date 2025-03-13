import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface PlaceholderPageProps {
  title: string; // Le titre de la page
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <>
      <Navbar />
      <div
        style={{
          textAlign: "center",
          padding: "100px 20Px",
          background: "white",
        }}
      >
        <h1>{title}</h1>
        <img
          src="/src/assets/page-en-construction.png"
          alt="Page en construction"
          style={styles.image}
        />
        <p>🚧 Cette page est en cours de construction 🚧</p>
        <p>Revenez bientôt pour découvrir son contenu !</p>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  image: {
    maxWidth: "300px",
    margin: "20px 0",
  },
};

export default PlaceholderPage;
