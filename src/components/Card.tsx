import React from 'react';
import styles from './Card.module.css';

// Interface définissant la structure des données d'une carte
interface CardProps {
  title: string; // Titre de la carte
  description: string; // Description de la carte
  image?: string; // Optionnel : image de la carte
}

const Card: React.FC = () => {
  // Données des cartes, respectant l'interface CardProps
  const cardData: CardProps[] = [
    {
      title: 'Projet 1',
      description: 'Une application web innovante utilisant React.',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      title: 'Projet 2',
      description: 'Un projet explorant les dernières avancées en intelligence artificielle.',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      title: 'Projet 3',
      description: 'Un site interactif pour la gestion de projets en temps réel.',
      image: 'https://via.placeholder.com/400x200',
    },
  ];

  // Affichage dynamique des cartes
  return (
    <div className={styles.cardContainer}>
      {cardData.map((card, index) => (
        <div key={index} className={styles.card}>
          {/* Affiche l'image si elle est définie */}
          {card.image && <img src={card.image} alt={card.title} className={styles.cardImage} />}
          <div className={styles.cardContent}>
            {/* Titre de la carte */}
            <h2 className={styles.cardTitle}>{card.title}</h2>
            {/* Description de la carte */}
            <p className={styles.cardDescription}>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;