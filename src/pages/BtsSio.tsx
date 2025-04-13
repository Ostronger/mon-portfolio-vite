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
                  "/images/formation_bureautique.jpeg",
                  "/images/formation_crm.jpeg",
                  "/images/formation_video.jpeg",
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
                images: ["https://picsum.photos/300/200?2"],
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
                title: "Projet ppe 1 : Création d’outil d’émargement  Web",
                description:
                  `Objectif du Projet :
                  
                  Dans le cadre de ce PPE, nous avons conçu et développé un outil d’émargement en ligne, destiné à simplifier la gestion de la présence des apprenants dans un établissement de formation.
                  
                  Cet outil permettait de :
                  
                  • Générer des feuilles de présence numériques  
                  • Authentifier les apprenants via QR code  
                  • Consigner automatiquement les signatures et les horaires  
                  • Faciliter le suivi administratif pour les formateurs et les responsables pédagogiques  
                  
                  Le projet a été développé en plusieurs étapes :
                  
                  • Rédaction du cahier des charges en collaboration avec les utilisateurs  
                  • Développement de l’interface web avec Symfony en suivant le modèle MVC  
                  • Réalisation des tests, déploiement sur un serveur Linux, et mise en production`,
                images: ["https://picsum.photos/300/200?3"],
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
                images: ["https://picsum.photos/300/200?4"],
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
                
                🎯 Objectifs :
                • Développer l’interface utilisateur en React & TypeScript  
                • Intégrer les maquettes Figma pour une UI fluide  
                • Connecter le front-end aux APIs pour afficher produits, utilisateurs, paniers  
                • Implémenter les appels API (GET, POST) pour gérer les actions essentielles du site  
                
                🛠️ Déroulement :
                • Création de composants réutilisables avec React Hooks  
                • Intégration responsive en respectant le design Figma  
                • Récupération dynamique des données via Axios  
                • Gestion des erreurs et des états de chargement  
                
                📈 Résultats :
                • Un site vitrine fonctionnel et dynamique  
                • Meilleure maîtrise de React, TypeScript et des appels API  
                • Expérience de travail en équipe et en méthode agile
                
                🔄 Fonctionnement de l’API dans le projet :
                • Affichage des produits (GET)  
                • Création et gestion d’un compte utilisateur (GET / POST)  
                • Ajout de produits au panier (POST)  
                • Consultation de l’historique des commandes (GET)
                
                Chaque interaction suit ce flux :
                → L’utilisateur agit  
                → Le front-end envoie une requête HTTP  
                → L’API traite et interagit avec la base  
                → Une réponse est renvoyée au front-end  
                → L’interface est mise à jour en conséquence`,
                  
                images: ["https://picsum.photos/300/200?5"],
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
                title: "Stage 2 : Développeur Fullstack",
                description: `Objectif du Projet :

                Créer une application mobile et web dédiée aux bons plans. L’objectif était de permettre aux utilisateurs de partager, consulter et interagir autour de promotions locales, réductions, et bons plans dans leur région.

                Le réseau social devait inclure :
                ✅ Un système d’inscription et de connexion sécurisé  
                ✅ Un fil d’actualité avec les bons plans récents  
                ✅ Un système de commentaires et de likes  
                ✅ Une version mobile fluide et une version web fonctionnelle  

                Contexte :

                Mon stage de 5 semaines s’est déroulé au sein d’une petite équipe : deux développeurs back-end et un webdesigner. J’étais chargé du développement fullstack. En raison du désistement du webdesigner, j’ai également pris en charge la conception des maquettes graphiques.

                Mes missions :

                🎨 Réalisation de maquettes Figma pour les pages de connexion (web et mobile)  
                💻 Intégration en React pour la version web  
                📱 Développement des écrans en Flutter (connexion, informations) pour la version mobile  
                🔗 Connexion à l’API Symfony pour authentification et récupération des données  

                Organisation Agile :

                🗓️ Réunions journalières avec mon référent pour le suivi opérationnel  
                🗂️ Réunions hebdomadaires pour ajuster le projet, répartir les tâches, définir les priorités  

                Résultats :

                ✔️ Une interface web opérationnelle avec React  
                ✔️ Des vues mobiles fonctionnelles sous Flutter  
                ✔️ Une autonomie renforcée sur la gestion de projet et la collaboration inter-équipes`,
                  
                images: ["https://picsum.photos/300/200?6"],
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
