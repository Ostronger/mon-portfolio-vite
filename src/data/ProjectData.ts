// src/data/projectsData.ts

export interface ProjectDetailData {
    slug: string;
    title: string;
    description: (string | { titre?: string; sousTitre?: string; contenu: string })[];
    images?: { url: string; legende?: string }[];
    technologies?: string[];
    links?: { label: string; url: string }[];
  }
  
  export const projectsData: ProjectDetailData[] = [
    {
        slug: "portfolio",
        title: "Portfolio",
        images: [
          { url: "/images/projectdetail_accueil.png", legende: "Page d'accueil du portfolio thème clair" },
          { url: "/images/projectdetail_accueil2.png", legende: "Page d'accueil thème sombre" }
        ],
        description: [
          {
            titre: "Contexte",
            contenu: "Ce projet a été réalisé dans le cadre de ma formation afin de présenter mes compétences."
          },
          {
            sousTitre: "Objectif",
            contenu: "Mettre en place un portfolio responsive, accessible et évolutif."
          },
          "J'ai utilisé React avec TypeScript pour structurer les composants et faciliter la maintenabilité."
        ],
        technologies: ["React", "TypeScript", "CSS Modules"],
        links: [
          { label: "Code source", url: "https://github.com/Ostronger/mon-portfolio-vite.git" }
        ]
      },
      {
        slug: "app-mobile",
        title: "Application Mobile",
        description: [
          { titre: "Objectifs de l'application", contenu: "Une application mobile pour la signature des aprrenants réalisée avec React Native." },
          "Cette application permet de signer, consulter son planning quotidiennement à l’aide d’une interface intuitive.",
          {
            sousTitre: "Fonctionnalités principales",
            contenu: 
            "• Emargement\n• Planning\n• Interface responsive compatible Android/iOS\n• Notifications\n• Justifier une absence"
          }
        ],
        images: [
          { url: "/images/project_mobile_emargement1.png", legende: "Page de connexion de l'application" },
          { url: "/images/project_mobile_emargement2.png", legende: "Page de signatue" },
          { url: "/images/project_mobile_emargement3.png", legende: "Page du planning" }
        ],
        technologies: ["React Native", "Expo", "TypeScript"],
        links: [
          { label: "Code source", url: "https://github.com/Ostronger/Emargement-reactNative.git" }
        ]
      },
      {
        slug: "emargement",
        title: "Système d'Émargement",
        description: [
          { titre: "Gestion des présences", contenu: "Une solution web de gestion des présences pour les formations." },
          "Le système permet aux formateurs et administrateurs de suivre les émargements en temps réel, avec un accès aux historiques par session.",
          {
            sousTitre: "Fonctionnalités",
            contenu: "• Émargement numérique \n• Interface administrateur pour le suivi\n• Export des rapports d’émargement\n• Création de sessions d’émargement\n• Création de comptes utilisateurs"
          }
        ],
        images: [
          { url: "/images/btssio_ppemargeweb3.png", legende: "Vue de la page d'accueil administrateur" },
          { url: "/images/projet_emargement_formateur.png", legende: "Suivi des présences par session cotés formateur" }
        ],
        technologies: ["Symfony", "PHP", "MySQL"],
        links: [
          { label: "Code source", url: "https://github.com/Ostronger/emargement-symfony.git" }
        ]
      }
  ];
  