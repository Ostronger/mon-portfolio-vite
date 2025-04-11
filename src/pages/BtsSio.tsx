import React, { useState } from "react";
import styles from "./BtsSio.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ModalInfo from "../components/ModalInfo";

const BtsSio: React.FC = () => {
  const [modalData, setModalData] = useState<{
    title: string;
    description: string;
    images: string[];
    links?: { label: string; url: string }[];
  } | null>(null);

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <h1>BTS SIO</h1>

        {/* Présentation */}
        <section className={styles.section}>
          <h2>Présentation</h2>
          <p>
            Le BTS SIO (Services Informatiques aux Organisations) est une
            formation en deux ans — ou en un an pour les reconversions
            accélérées — orientée vers les métiers de l'informatique. Il se
            décline en deux spécialités : SISR (infrastructure réseau) et SLAM
            (développement d'applications).
          </p>
        </section>

        {/* Option SLAM */}
        <section className={styles.section}>
          <h2>Option SLAM</h2>
          <p>
            L’option SLAM (Solutions Logicielles et Applications Métiers) se
            concentre sur le développement logiciel, la conception
            d’applications web et mobiles, la gestion de bases de données, et
            l’intégration dans un environnement professionnel.
          </p>
        </section>

        {/* Pourquoi ce choix */}
        <section className={styles.section}>
          <h2>Pourquoi ce choix ?</h2>
          <p>
            En reconversion professionnelle, j’ai choisi cette formation pour
            acquérir une base solide en développement et pouvoir me spécialiser
            dans le domaine du web et du mobile, avec un objectif clair :
            devenir développeur fullstack.
          </p>
        </section>

        {/* Épreuve E5 */}
        <section className={styles.section}>
          <h2>
            Épreuve E5 – Support et mise à disposition de services informatiques
          </h2>
          <p>
            L’épreuve E5, anciennement connue sous le nom d’E4, a pour objectif
            d’évaluer la capacité du candidat à analyser, concevoir et déployer
            des solutions informatiques dans un contexte professionnel.
          </p>
          <p>
            Elle repose sur deux situations professionnelles significatives que
            l'étudiant doit documenter à travers des fiches de situation (type
            E4-A), accompagnées de preuves tangibles (captures d’écran, codes,
            schémas, etc.).
          </p>
          <p>
            Ces projets sont ensuite présentés lors d’un oral devant un jury,
            qui évalue non seulement la pertinence technique, mais aussi la
            clarté et la qualité de la communication du candidat.
          </p>
        </section>

        {/* Mes réalisations */}
        <section className={styles.section}>
          <h2>Mes réalisations</h2>
          <p>
            Cette année, j’ai eu l’opportunité de travailler sur plusieurs
            projets concrets dans le cadre de ma formation BTS SIO, option SLAM.
            Ces réalisations m'ont permis d'approfondir mes compétences
            techniques et de mieux comprendre les exigences du métier de
            développeur dans un environnement professionnel.
          </p>

          {/* Mes projets */}
          <h3>Mes projets</h3>
          <div className={styles.cardGrid}>
            {[
              {
                title: "PPE Projet Forma SI 1, Evolution du parc informatique",
                description: `Objectif du Projet :
                
                Dans le cadre de notre PPE, nous avons mené une étude complète pour proposer trois devis destinés à faire évoluer le parc informatique de FormaTech.
                
                Notre mission consistait à :

                • Planifier l’achat, la livraison et l’installation du nouveau matériel  
                • Respecter les normes de sécurité et les standards de l’entreprise  
                • Optimiser les postes pour garantir une utilisation performante  
                • Préparer les infrastructures pour l’accueil de nouvelles formations  

                Chaque salle de formation a fait l’objet d’un devis détaillé incluant :

                • Le choix des équipements  
                • La configuration logicielle et matérielle  
                • La mise en place des solutions de stockage et de sauvegarde  


                Nous avons respecté les contraintes imposées par FormaTech :

                • Système d’exploitation : Windows 11 Pro privilégié  
                • Logiciels : Priorité aux logiciels libres quand cela était possible  
                • Maintenance : L’équipe informatique n’assure pas le support matériel  
                • Sécurité : Les postes ont été livrés avec des dispositifs de sécurité adaptés`,
                images: [
                  "https://picsum.photos/400/200?1",
                  "https://picsum.photos/400/200?2",
                ],
                links: [
                  {
                    label: "Voir le rapport PDF",
                    url: "https://exemple.com/rapport-forma-si1.pdf",
                  },
                  {
                    label: "Documentation technique",
                    url: "https://exemple.com/doc-tech",
                  },
                ],
              },
              {
                title: "App Mobile Planning",
                description:
                  "Application React Native permettant la gestion de planning pour les étudiants.",
                images: ["https://picsum.photos/300/200?2"],
              },
              {
                title: "Système d’Émargement",
                description:
                  "Application web et mobile permettant la gestion des présences via QR code et signature.",
                images: ["https://picsum.photos/300/200?3"],
              },
              {
                title: "Dashboard Admin",
                description:
                  "Tableau de bord destiné aux administrateurs avec gestion des utilisateurs et données.",
                images: ["https://picsum.photos/300/200?4"],
              },
            ].map((project, i) => (
              <div
                key={i}
                className={styles.card}
                onClick={() => setModalData(project)}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className={styles.cardImage}
                />
                <div className={styles.cardTitle}>{project.title}</div>
              </div>
            ))}
          </div>

          {/* Stages */}
          <h3>Stages</h3>
          <div className={styles.cardGrid}>
            {[
              {
                title: "Stage 1 : Intégrateur Web",
                description:
                  "Intégration d’un site vitrine à partir de maquettes Figma au sein d’une équipe de développement.",
                images: ["https://picsum.photos/300/200?5"],
              },
              {
                title: "Stage 2 : Développeur Fullstack",
                description:
                  "Développement d’un réseau social avec React (web) et Flutter (mobile), connecté à une API Symfony.",
                images: ["https://picsum.photos/300/200?6"],
              },
            ].map((stage, i) => (
              <div
                key={i}
                className={styles.card}
                onClick={() => setModalData(stage)}
              >
                <img
                  src={stage.images[0]}
                  alt={stage.title}
                  className={styles.cardImage}
                />
                <div className={styles.cardTitle}>{stage.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal affiché si ouvert */}
        {modalData && (
          <ModalInfo
            title={modalData.title}
            description={modalData.description}
            images={modalData.images}
            links={modalData.links}
            onClose={() => setModalData(null)}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default BtsSio;
