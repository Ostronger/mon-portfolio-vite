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
          { url: "https://picsum.photos/600/300?1", legende: "Page d'accueil du portfolio" },
          { url: "https://loremflickr.com/1280/720", legende: "Section projets" }
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
          { label: "Voir le site", url: "https://monportfolio.com" },
          { label: "Code source", url: "https://github.com/monrepo/portfolio" }
        ]
      },
      {
        slug: "app-mobile",
        title: "Application Mobile",
        description: [
          { titre: "Objectifs de l'application", contenu: "Une application mobile de gestion de tâches réalisée avec React Native." },
          "Cette application permet d’ajouter, modifier et supprimer des tâches quotidiennes à l’aide d’une interface intuitive.",
          {
            sousTitre: "Fonctionnalités principales",
            contenu: 
            "• Gestion des tâches\n• Notifications locales\n• Interface responsive compatible Android/iOS"
          }
        ],
        images: [
          { url: "https://picsum.photos/600/300?2", legende: "Interface principale de l’application" },
          { url: "https://loremflickr.com/1280/720", legende: "Vue mobile de la liste des tâches" }
        ],
        technologies: ["React Native", "Expo", "TypeScript"]
      },
      {
        slug: "emargement",
        title: "Système d'Émargement",
        description: [
          { titre: "Gestion des présences", contenu: "Une solution web de gestion des présences pour les formations." },
          "Le système permet aux formateurs et administrateurs de suivre les émargements en temps réel, avec un accès aux historiques par session.",
          {
            sousTitre: "Fonctionnalités",
            contenu: "• Émargement numérique avec QR code\n• Interface administrateur pour le suivi\n• Export des rapports d’émargement"
          }
        ],
        images: [
          { url: "https://picsum.photos/600/300?3", legende: "Vue de l’interface d’émargement" },
          { url: "https://loremflickr.com/1280/720", legende: "Suivi des présences par session" }
        ],
        technologies: ["Symfony", "React", "MySQL"]
      }
  ];
  