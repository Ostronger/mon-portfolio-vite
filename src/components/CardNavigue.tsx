import React, { useState, useEffect } from 'react';
import styles from './CardNavigue.module.css'; // Import des styles CSS Modules
import Coco from './../assets/Design_sans_titre.png';
import Second from './../assets/reading-7807231_1280.webp';
import MoiMeme from './../assets/papillon-dans-nature-vibrante-flutter-ailes-au-milieu-beau-jardin-fleurit-generative-ai_762139-7879.avif';


interface Product {
  title: string;
  subtitle?: string;
  description: (string | {type: 'list', items: string[] })[]
  imageUrl: string;
}

const CardNavigue: React.FC = () => {
  const products: Product[] = [
    {
      title: "Qui suis je?",
      description: [
        "👋 Je suis Pierre Paul Jacque, un développeur fullstack en devenir 🚀. Passionné d’informatique et en pleine reconversion professionnelle.",
        "Chaque projet, chaque ligne de code, est le reflet de ma détermination à maîtriser les technologies du web. Actuellement en BTS SIO option SLAM, je me forme à la création d’applications modernes et performantes.",
        {
          type: 'list',
          items: [
            "🌐 Création de sites web responsives",
            "📲 Développement mobile avec React Native",
            "💻 Maîtrise des bases de données (SQL, NoSQL)"
          ]
        },
        "Mon objectif ? Devenir un développeur fullstack complet, capable de créer des solutions de A à Z, du front-end au back-end.",
        "📩 Envie de collaborer ? N’hésitez pas à me contacter !"
      ],
      imageUrl: Coco,
    },
    {
      title: "Mes Projets",
      description: [
        "Découvrez mes derniers projets de développement web et mobile.",
        "Chaque projet est un pas de plus vers la maîtrise des technologies web."
      ],
      imageUrl: Second,
    },
    {
      title: "Mes Compétences",
      description: [
        "Voici les compétences techniques que j'ai acquises au fil de ma formation et de mes projets.",
        {
          type: 'list',
          items: [
            "✔️ HTML / CSS / JavaScript",
            "✔️ React / React Native",
            "✔️ Node.js / Express",
            "✔️ SQL et NoSQL (MongoDB)"
          ]
        }
      ],
      imageUrl: MoiMeme,
    },
  ];

  // État pour suivre la carte actuelle
  const [currentCard, setCurrentCard] = useState(0);
  const [animate, setAnimate] = useState(false);

  // Défilement automatique des cartes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % products.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [products.length]);

  // Déclencher l'animation à chaque changement de carte
  useEffect(() => {
    setAnimate(true); // Ajoute la classe animée
    const timeout = setTimeout(() => setAnimate(false), 500); // Retire la classe après l'animation
    return () => clearTimeout(timeout);
  }, [currentCard]);

  const handleDotClick = (index: number) => {
    setCurrentCard(index);
  };


  return (
    <div className={styles.cardPrincipal}>
      {/* Image et détails du produit */}
      <div className={styles.productDetails}>
        <img
          src={products[currentCard].imageUrl}
          alt={products[currentCard].title}
          className={`${styles.productImage} ${animate ? styles.animated : ''}`}
        />
      </div>
  
      {/* Widget principal */}
      <div className={styles.contentWidget}>
        {/* En-tête de la carte */}
        <div className={styles.caption}>
          <span className={styles.divider}></span>
          <span className={styles.titreContent1}>{products[currentCard].subtitle}</span>
        </div>
  
        {/* Titre du produit */}
        <div className={styles.titreProduct}>
          <span className={styles.titreName}>{products[currentCard].title}</span>
        </div>
  
        {/* Description */}
        <div className={styles.description}>
          {products[currentCard].description.map((desc, index) => (
            typeof desc === 'string' ? (
              <p key={index} className={styles.descriptionProduct}>{desc}</p>
            ) : desc.type === 'list' ? (
              <ul key={index} className={styles.descriptionList}>
                {desc.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            ) : null
          ))}
        </div>
      </div>
  
      {/* Points de navigation */}
      <div className={styles.dotsNavigation}>
        {products.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentCard ? styles.active : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CardNavigue;