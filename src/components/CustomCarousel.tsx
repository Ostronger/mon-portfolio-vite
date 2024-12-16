import React, { useState } from 'react';
import styles from './CustomCarousel.module.css';
import Coco from './../assets/dessert-ete-creme-glacee-noix-coco-isole-fond-blanc-png_185193-110472.jpg';
import Second from './../assets/reading-7807231_1280.webp';


interface CarouselItem {
  title: string;
  description: string;
  image: string;
}

const CustomCarousel: React.FC = () => {
  // Données pour le carrousel
  const items: CarouselItem[] = [
    {
      title: 'Projet 1',
      description: 'Une application web innovante utilisant React.',
      image: Coco,
    },
    {
      title: 'Projet 2',
      description: 'Un projet explorant les dernières avancées en IA.',
      image: Second,
    },
    {
      title: 'Projet 3',
      description: 'Un site interactif pour la gestion de projets.',
      image: 'https://via.placeholder.com/600x300',
    },
  ];

  // État pour suivre l'élément actif
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'élément suivant
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Fonction pour revenir à l'élément précédent
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carouselContainer}>
      {/* Flèche gauche */}
      <button className={styles.arrow} onClick={prevSlide}>
        &lt;
      </button>

      {/* Contenu du carrousel */}
      <div className={styles.carouselContent}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentIndex ? styles.active : ''
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className={styles.image}
            />
            <div className={styles.text}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Flèche droite */}
      <button className={styles.arrow} onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default CustomCarousel;