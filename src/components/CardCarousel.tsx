import React from 'react';
import Slider from 'react-slick';
import styles from './CardCarousel.module.css';
import Coco from './../assets/dessert-ete-creme-glacee-noix-coco-isole-fond-blanc-png_185193-110472.jpg';
import Second from './../assets/reading-7807231_1280.webp';
import MoiMeme from './../assets/papillon-dans-nature-vibrante-flutter-ailes-au-milieu-beau-jardin-fleurit-generative-ai_762139-7879.avif';

// Interface pour les données des cartes
interface CardProps {
  title: string;
  description: string;
  image?: string;
}

const CardCarousel: React.FC = () => {
  // Données des cartes
  const cardData: CardProps[] = [
    {
      title: 'Projet 1',
      description: 'Une application web innovante utilisant React.',
      image: Coco,
    },
    {
      title: 'Projet 2',
      description: 'Un projet explorant les dernières avancées en intelligence artificielle.',
      image: Second,
    },
    {
      title: 'Projet 3',
      description: 'Un site interactif pour la gestion de projets en temps réel.',
      image: MoiMeme,
    },
  ];

  // Paramètres de configuration pour le carrousel
  const settings = {
    dots: true, // Affiche les points de navigation
    infinite: false, // Défilement infini
    speed: 1000, // Durée de transition
    slidesToShow: 1, // Nombre de cartes visibles
    slidesToScroll: 1, // Nombre de cartes à faire défiler
    autoplay: true, // Lecture automatique
    autoplaySpeed: 7000, // Intervalle entre chaque défilement (en ms)
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className={styles.card}>
            {card.image && <img src={card.image} alt={card.title} className={styles.cardImage} />}
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{card.title}</h2>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;