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
          <p>
            Vous pouvez consulter mon <strong>tableau de synthèse E5 (Annexe 8-1)</strong>, qui regroupe l’ensemble de mes réalisations professionnelles et les compétences mobilisées dans le cadre de l’épreuve :
          </p>
          <div>
            <a href="https://drive.google.com/file/d/1UBWXfxPwAp-vELBeRfvhG-8hMJUs3OJU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className={styles.documentLink}> Télécharger le tableau de synthèse E5 – Annexe 8-1</button>
            </a>
          </div>
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
          <h3>Mes projets en BTS SIO</h3>
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

                • Le choix des équipements (PC, imprimantes, périphériques...) 
                • Les configurations logicielles et matérielles  
                • La mise en place des solutions de stockage et de sauvegarde  


                Nous avons respecté les contraintes imposées par FormaTech :

                • Système d’exploitation : Windows 11 Pro privilégié  
                • Logiciels : Priorité aux logiciels libres quand cela était possible  
                • Maintenance : L’équipe informatique n’assure pas le support matériel  
                • Sécurité : Les postes ont été livrés avec des dispositifs de sécurité adaptés`,
                images: [
                  "/images/formation_bureautique.jpeg",
                  "/images/formation_crm.jpeg",
                  "/images/formation_video.jpeg",
                ],
                links: [
                  {
                    label: "Documentation technique",
                    url: "https://drive.google.com/file/d/1LfmokhXqy1i1aMJqKh2J8egA8YTBFc2b/view?usp=sharing",
                  },
                  {
                    label: "Dossier d'analyse des besoins et préconisations",
                    url: "https://drive.google.com/file/d/12c80uusbtJw5q9fBgKLUwo6raW-65OEi/view?usp=sharing",
                  },
                ],
              },
              {
                title: "PPE Projet C: Gestion du matériel informatique",
                description:
                  `Objectif du Projet :
                  
                  Dans le cadre de ce PPE, nous avons développé une solution complète de gestion des prêts de matériel informatique destinée à améliorer le suivi et la disponibilité des équipements.
                  
                  Cette solution permettait notamment de :
                  
                  • Enregistrer et suivre les prêts de matériel  
                  • Vérifier les dates de retour et générer des alertes en cas de retard  
                  • Consulter un historique des prêts pour chaque utilisateur ou équipement  
                  • Gérer le statut du matériel (disponible, en prêt, endommagé, etc.)
                  
                  Le projet s’est articulé autour de trois grands axes :
                  
                  • Conception de la base de données et développement du back-end  
                  • Création d’une interface utilisateur intuitive  
                  • Mise en place de l’infrastructure et déploiement de l’application`,
                images: [
                  "/images/btssio_ppeC.jpeg",
                  "/images/btssio_ppeCaccueil.png",
                ],
                
                links: [
                  {
                    label: "Maquette Figma",
                    url: "https://www.figma.com/design/84yIbDiupgV98vLLouK2rn/Untitled?node-id=0-1&m=dev&t=39mxCbZTr7ojo6zB-1",
                  },
                  {
                    label: "Rapport de projet",
                    url: "https://drive.google.com/file/d/1VU3P8lgOGaLAXKBpWQexWYQcJBG9B0BG/view?usp=sharing",
                  },
                ],
              },
              {
                title: "Projet ppe 1 : Création d'un outil d’émargement Web",
                description:
                  `Objectif du Projet :
                  
                  Dans le cadre de ce PPE, nous avons conçu et développé un outil d’émargement en ligne, destiné à simplifier la gestion de la présence des apprenants dans un établissement de formation.
                  
                  Cet outil permet de :
                  
                  • Générer des feuilles de présence numériques  
                  • Authentifier les apprenants
                  • Consigner automatiquement les signatures et les horaires  
                  • Faciliter le suivi administratif pour les formateurs et les responsables pédagogiques  
                  
                  Le projet a été développé en plusieurs étapes :
                  
                  • Rédaction du cahier des charges en collaboration avec les utilisateurs  
                  • Développement de l’interface web avec Symfony en suivant le modèle MVC  
                  • Réalisation des tests, déploiement sur un serveur Linux, et mise en production`,
                images: [
                  "/images/btssio_ppemargeweb3.png",
                  "/images/btssio_ppeemargeweb2.png",
                  "/images/btssio_ppeemargeweb1.png",
                ],
                links: [
                  {
                    label: "Figma",
                    url: "https://www.figma.com/design/rljuchhQ7rZN6gcvg2awzh/site-feuille-d'%C3%A9margement?node-id=0-1&m=dev&t=vPFFMNLUMfXzkFHW-1",
                  },
                  {
                    label: "GitHub",
                    url: "https://github.com/Ostronger/emargement-symfony",
                  },
                  {
                    label: "Documentation",
                    url: "https://atom-porpoise-e92.notion.site/Projets-d-margement-195cf6ffbb2180c38dedc08e83b4a523",
                  },
                  {
                    label: "Documentation utilisateur – Interface administrateur",
                    url: "https://drive.google.com/file/d/1bWlAidQ5m0eZ-u8eCXlFYq7oR_VjALH9/view?usp=sharing",
                  },
                ],
              },
              {
                title: "Projet ppe 2 : Création d’outil d’émargement mobile",
                description:
                  `Objectif du Projet :
                  
                  Dans le cadre de ce PPE, nous avons conçu et développé une application mobile permettant aux apprenants de valider leur présence directement via leur smartphone.
                  
                  Cet outil a été pensé pour offrir une solution moderne et intuitive d’émargement à distance. Il permettait notamment de :
                  
                  • Émarger depuis un appareil mobile grâce à une signature numérique  
                  • Consulter son planning de cours  
                  • Justifier une absence ou un retard  
                  • Assurer une synchronisation sécurisée des données avec le serveur  
                  L’application a été développée avec React Native via Expo, et les données étaient transmises en temps réel à une API développée avec Symfony.`,
                images: [
                  "images/btssio_ppe2mobile3.png",
                  "images/btssio_ppe2mobile2.png",
                  "images/btssio_ppe2mobile1.png",
                ],
                links: [
                  {
                    label: "Github",
                    url: "https://github.com/Ostronger/Emargement-reactNative",
                  },
                  {
                    label: "Figma",
                    url: "https://www.figma.com/design/rljuchhQ7rZN6gcvg2awzh/site-feuille-d'%C3%A9margement?node-id=0-1&m=dev&t=vPFFMNLUMfXzkFHW-1",
                  },
                  {
                    label: "Documentation",
                    url: "https://atom-porpoise-e92.notion.site/Projets-d-margement-195cf6ffbb2180c38dedc08e83b4a523",
                  },
                ],
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
                title: "Stage 1 : Développeur Web Front-End chez YANN FRANCE DIPITA",
                description:
                `Ce stage de 5 semaines m’a permis d’évoluer au sein d’une équipe composée de deux développeurs back-end et moi en tant que front-end. J’ai participé à la création d’un site vitrine connecté à des APIs.
                
                Objectifs :
                • Développer l’interface utilisateur en React & TypeScript  
                • Intégrer les maquettes Figma pour une UI fluide  
                • Connecter le front-end aux APIs pour afficher produits, utilisateurs, paniers  
                • Implémenter les appels API (GET, POST) pour gérer les actions essentielles du site  
                
                Déroulement :
                • Création de composants réutilisables avec React Hooks  
                • Intégration responsive en respectant le design Figma  
                • Récupération dynamique des données via Axios  
                • Gestion des erreurs et des états de chargement  
                
                Résultats :
                • Création de plusieurs composants réutilisables (Header, Footer, etc.) 
                • Meilleure maîtrise de React, TypeScript et des appels API  
                • Expérience de travail en équipe et en méthode agile
                
                Fonctionnement de l’API dans le projet :
                • Affichage des produits (GET)  
                • Création et gestion d’un compte utilisateur (GET / POST)  
                • Ajout de produits au panier (POST)  
                
                Chaque interaction suit ce flux :
                → L’utilisateur agit  
                → Le front-end envoie une requête HTTP  
                → L’API traite et interagit avec la base  
                → Une réponse est renvoyée au front-end  
                → L’interface est mise à jour en conséquence`,
                  
                images: [
                  "images/stage1_1.jpeg",
                  "images/stage1_2.jpeg",
                  "images/stage1_3.jpeg",
                  "images/stage1_4.jpeg",
                  "images/stage1_5.jpeg",
                ],
                links: [
                  {
                    label: "Voir le rapport PDF",
                    url: "https://drive.google.com/file/d/1J48k6t0Iuc1KKV88wenrx_5Rn7udAop6/view?usp=drive_link",
                  },
                ],
              },
              {
                title: "Stage 2 : Développeur Fullstack",
                description: `Objectif du Projet :

                Créer une application mobile et web dédiée aux bons plans. L’objectif était de permettre aux utilisateurs de partager, consulter et interagir autour de promotions locales, réductions, et bons plans dans leur région.

                Le réseau social devait inclure :
                • Un système d’inscription et de connexion sécurisé  
                • Un fil d’actualité avec les bons plans récents  
                • Un système de commentaires et de likes  
                • Une version mobile fluide et une version web fonctionnelle  

                Contexte :

                Mon stage de 5 semaines s’est déroulé au sein d’une petite équipe : deux développeurs back-end et un webdesigner. J’étais chargé du développement fullstack. En raison du désistement du webdesigner, j’ai également pris en charge la conception des maquettes graphiques.

                Mes missions :

                • Réalisation de maquettes Figma pour les pages de connexion (web et mobile)  
                • Intégration en React pour la version web  
                • Développement des écrans en Flutter (connexion, informations) pour la version mobile  
                • Connexion à l’API Symfony pour authentification et récupération des données  

                Organisation Agile :

                • Réunions journalières avec mon référent pour le suivi opérationnel  
                • Réunions hebdomadaires pour ajuster le projet, répartir les tâches, définir les priorités  

                Résultats :

                • Une interface web opérationnelle avec React  
                • Des vues mobiles fonctionnelles sous Flutter  
                • Une autonomie renforcée sur la gestion de projet et la collaboration inter-équipes`,
                  
                images: [
                  "images/stage2_1.jpeg",
                  "images/stage2_2.jpeg",
                ],
                links: [
                  {
                    label: "Voir le rapport PDF",
                    url: "https://drive.google.com/file/d/1BCyFNPda6vraJV_-b8OEfHjpjhs1wGeq/view?usp=drive_link",
                  },
                ],
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
