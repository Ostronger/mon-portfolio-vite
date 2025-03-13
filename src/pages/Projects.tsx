import React, { useRef } from "react";
import styles from "./Projects.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
  {
    title: "Portfolio",
    description: "Un site personnel mettant en avant mes compétences et projets.",
    image: "https://picsum.photos/300/200",
  },
  {
    title: "Application Mobile",
    description: "Une application React Native pour gérer les tâches quotidiennes.",
    image: "https://picsum.photos/300/200",
  },
  {
    title: "Système d'Émargement",
    description: "Un projet permettant la gestion d'émargement en ligne.",
    image: "https://picsum.photos/300/200",
  },
  
  
  
];

const Projects: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.projectsContainer}>
      <Navbar />
      <h1> Mes Projets</h1>
      <div className={styles.carouselControls}>
        <button onClick={scrollLeft} className={styles.carouselButton}>❮</button>
        <button onClick={scrollRight} className={styles.carouselButton}>❯</button>
      </div>
      <div className={styles.projectsWrapper} ref={carouselRef}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
