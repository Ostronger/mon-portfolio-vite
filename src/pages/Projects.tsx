import React, { useRef } from "react";
import styles from "./Projects.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

interface Project {
  title: string;
  slug: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Portfolio",
    slug: "portfolio",
    description:
      "Un site personnel mettant en avant mes compétences et projets.",
    image: "/images/project_portfolio.jpg",
  },
  {
    title: "Application Mobile d'Emargement",
    slug: "app-mobile",
    description:
      "Une application React Native pour l'émargements des apprenants.",
    image: "/images/project_mobile.jpg",
  },
  {
    title: "Système d'Émargement web",
    slug: "emargement",
    description: 
      "Un projet permettant la gestion d'émargement en ligne.",
    image: "/images/project_emargement.jpg",
  },
];

const Projects: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
      <h1>Mes Projets</h1>
      <p className={styles.intro}>
      Cette section présente une sélection de projets que j’ai réalisés au cours de ma reconversion et de mon apprentissage en développement. 
      Ces projets sont variés, allant de la création d’interfaces web à l’intégration d’API ou encore à la mise en place d’architectures back-end. 
      Chacun d’eux reflète mes compétences techniques, ma progression, et ma passion pour l’informatique.
      </p>
  
      {/* ✅ Regroupe les flèches et le carrousel dans un seul bloc */}
      <div className={styles.carouselSection}>
      <button onClick={scrollLeft} className={`${styles.carouselButton} ${styles.left}`}>
          ❮
        </button>
  
        <div className={styles.projectsWrapper} ref={carouselRef}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={styles.projectCard}
              onClick={() => navigate(`/projects/${project.slug}`)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
  
        <button onClick={scrollRight} className={`${styles.carouselButton} ${styles.right}`}>
          ❯
        </button>
      </div>
  
      <Footer />
    </div>
  );
};

export default Projects;
