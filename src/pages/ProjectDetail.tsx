import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProjectDetail.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projectData: Record<string, { title: string; description: string; image: string }> = {
  portfolio: {
    title: "Portfolio",
    description: "Ce projet présente mon portfolio personnel, conçu avec React pour mettre en valeur mes compétences et réalisations.",
    image: "https://picsum.photos/600/300?1",
  },
  "app-mobile": {
    title: "Application Mobile",
    description: "Une application mobile développée avec React Native permettant la gestion de tâches et notifications quotidiennes.",
    image: "https://picsum.photos/600/300?2",
  },
  emargement: {
    title: "Système d'Émargement",
    description: "Application web pour la gestion d'émargement en ligne, avec QR code et interface admin.",
    image: "https://picsum.photos/600/300?3",
  },
};

const ProjectDetail: React.FC<{ slug?: string }> = ({ slug }) => {
  const { slug: paramSlug } = useParams();
  const navigate = useNavigate();
  const project = projectData[slug || paramSlug || ""];

  if (!project) {
    return <div>Projet introuvable.</div>;
  }

  return (
    <div className={styles.detailContainer}>
      <Navbar />
      <div className={styles.backButton} onClick={() => navigate("/projects")}>⟵ Retour</div>
      <div className={styles.content}>
        <h1>{project.title}</h1>
        <img src={project.image} alt={project.title} className={styles.image} />
        <p className={styles.description}>{project.description}</p>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
