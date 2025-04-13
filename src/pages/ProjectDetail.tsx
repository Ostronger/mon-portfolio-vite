import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProjectDetail.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projectsData } from "../data/ProjectData";

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.slug === slug);

  const [mainImage, setMainImage] = useState(project?.images?.[0]?.url || "");

  if (!project) {
    return (
      <div className={styles.detailContainer}>
        <Navbar />
        <div className={styles.content}>
          <h1>Projet introuvable.</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.detailContainer}>
      <Navbar />
      <div className={styles.backButton} onClick={() => navigate("/projects")}>
      ❮ Retour
      </div>

      <div className={styles.content}>
        <h1>{project.title}</h1>

        {/* Image principale */}
        {mainImage && (
          <img src={mainImage} alt="Aperçu du projet" className={styles.image} />
        )}

         {/* Légende de l’image sélectionnée */}
         {project.images && project.images.length > 0 && (
          <p className={styles.caption}>
            {
              project.images.find((img) => img.url === mainImage)?.legende
            }
          </p>
        )}

        {/* Miniatures */}
        {project.images && project.images.length > 1 && (
          <div className={styles.thumbnailGallery}>
            {project.images.map((img, idx) => (
              <img
                key={idx}
                src={img.url}
                alt={img.legende || `Image ${idx + 1}`}
                className={`${styles.thumbnail} ${
                  mainImage === img.url ? styles.activeThumb : ""
                }`}
                onClick={() => setMainImage(img.url)}
              />
            ))}
          </div>
        )}

        {/* Description structurée */}
        <div className={styles.description}>
          {Array.isArray(project.description) ? (
            project.description.map((section, index) =>
              typeof section === "string" ? (
                <p key={index}>{section}</p>
              ) : section.titre ? (
                <h2 key={index}>{section.titre}</h2>
              ) : section.sousTitre ? (
                <div key={index}>
                  <h3>{section.sousTitre}</h3>
                  {section.contenu.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
              ))}
                </div>
              ) : null
            )
          ) : (
            <p>{project.description}</p>
          )}
        </div>

        {/* Technologies */}
        {Array.isArray(project.technologies) && project.technologies.length > 0 && (
        <div className={styles.techSection}>
          <h3>Technologies utilisées</h3>
        <div className={styles.badges}>
          {(project.technologies ?? []).map((tech, index) => (
          <span key={index} className={styles.badge}>
            {tech}
          </span>
        ))}
          </div>
        </div>
        )}

        {/* Liens externes */}
        {Array.isArray(project.links) && project.links.length > 0 && (
          <div className={styles.linksSection}>
            <h3>Liens utiles</h3>
            <div className={styles.linksList}>
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;