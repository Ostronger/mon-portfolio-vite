import React, { useState, useEffect } from 'react';
import styles from './CardNavigue.module.css';


interface Product {
  title: string;
  subtitle?: string;
  description: (
    string |
    { type: 'list'; items: string[] } |
    { type: 'linksGroup'; subtitle: string; links: { label: string; url: string }[] } |
    { type: 'badges'; items: string[] }
  )[];
  imageUrl: string;
}

const skills: string[] = [
  "HTML", 
  "CSS", 
  "JavaScript", 
  "React", 
  "React Native", 
  "TypeScript", 
  "Node.js",  
  "SQL", 
  "MongoDB", 
  "Git", 
  "Figma", 
  "Symfony", 
  "PHP", 
  "Flutter",
  "Python"
];

const CardNavigue: React.FC = () => {
  const products: Product[] = [
    {
      title: "Qui suis je?",
      description: [
        "Je suis Lukamba, passionné d’informatique et engagé dans une réorientation professionnelle vers les métiers du développement.",
        "Actuellement en formation BTS SIO option SLAM, j’apprends à concevoir des applications modernes, efficaces et adaptées aux besoins des utilisateurs.",
        "Mon parcours est motivé par une volonté claire : acquérir des compétences solides en développement web et mobile et progresser continuellement dans ce domaine en constante évolution.",
        "Ce portfolio est le reflet de mon apprentissage, de mes projets et de ma motivation. Envie d’échanger ? N’hésitez pas à me contacter."
      ],
      imageUrl: "/images/moi_meme.jpeg",
    },
    {
      title: "Mes Compétences",
      description: [
        "Voici les compétences techniques que j'ai acquises au fil de ma formation et de mes projets.",
        {
          type: 'badges',
          items: skills
        }
      ],
      imageUrl: "/images/compétences.jpg",
    },
    {
      title: "Mes Certifications et Formations Complémentaires",
      description: [
        "Découvrez les certifications et Formations Complémentaires que j’ai obtenues au cours de ma formation et de mon apprentissage personnel.",
        "Elles témoignent de mon engagement à renforcer mes compétences en développement web, mobile et technologies numériques.",
        {
          type: 'linksGroup',
          subtitle: "Formations OpenClassrooms",
          links: [
            { label: "HTML / CSS", url: "https://drive.google.com/file/d/1-GBBCb39QoNTkxZIQz7AzzVb5wPqdZMg/view?usp=sharing" },
            { label: "Devenez développeur agile", url: "https://drive.google.com/file/d/1omAosnVo_mmFPSZMhmpy5E-6vaMpKnRE/view?usp=sharing" },
            { label: "Mettre en place un environnement front-end", url: "https://drive.google.com/file/d/1Y3ZREtYyR59sLfRNfCe6a6i7Q9EySNjB/view?usp=sharing" },
            { label: "Programmer avec JavaScript", url: "https://drive.google.com/file/d/1FNveeOdiO0yXF0acR9FFKh03DTnCURfL/view?usp=sharing" },
            { label: "Découvrez l'univers de la cybersécurité", url: "Découvrez l'univers de la cybersécurité" },
            { label: "Apprenez les bases du langage Python", url: "https://drive.google.com/file/d/1tF9hzMhAbBUB2HJ_pl8tYoKyiutS7X7D/view?usp=sharing" }
          ]
        },
        {
          type: 'linksGroup',
          subtitle: "Formations Mimo",
          links: [
            { label: "JavaScript – Mimo", url: "https://getmimo.com/" }
          ]
        }
      ],
      imageUrl: "/images/livre_ouvert.jpg",
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timeout);
  }, [currentCard]);

  const handleArrowClick = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentCard((prev) => (prev - 1 + products.length) % products.length);
    } else {
      setCurrentCard((prev) => (prev + 1) % products.length);
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentCard(index);
  };

  return (
    <>
      <div className={styles.cardWrapper}>
        <button 
          className={`${styles.arrowButton} ${styles.leftArrow}`}
          onClick={() => handleArrowClick('left')}
        >
          ❮
        </button>
  
        <div className={styles.cardPrincipal}>
          <div className={styles.productDetails}>
            <img
              src={products[currentCard].imageUrl}
              alt={products[currentCard].title}
              className={`${styles.productImage} ${animate ? styles.animated : ''}`}
            />
          </div>
  
          <div className={styles.contentWidget}>
            <div className={styles.titreProduct}>
              <span className={styles.titreName}>{products[currentCard].title}</span>
            </div>
  
            {products[currentCard].subtitle && (
              <div className={styles.subtitleBlock}>
                <span className={styles.titreContent1}>{products[currentCard].subtitle}</span>
              </div>
            )}
  
            <div className={styles.description}>
              {products[currentCard].description.map((desc, index) => {
                if (typeof desc === 'string') {
                  return (
                    <p key={index} className={styles.descriptionProduct}>
                      {desc}
                    </p>
                  );
                } else if (desc.type === 'list') {
                  return (
                    <ul key={index} className={styles.descriptionList}>
                      {desc.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  );
                } else if (desc.type === 'linksGroup') {
                  return (
                    <div key={index} className={styles.linksGroup}>
                      <h4 className={styles.subtitle}>{desc.subtitle}</h4>
                      <div className={styles.linkGroup}>
                        {desc.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
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
                  );
                } else if (desc.type === 'badges') {
                  return (
                    <div key={index} className={styles.badgeContainer}>
                      {desc.items.map((badge, badgeIndex) => (
                        <span key={badgeIndex} className={styles.badge}>
                          {badge}
                        </span>
                      ))}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
  
        <button 
          className={`${styles.arrowButton} ${styles.rightArrow}`}
          onClick={() => handleArrowClick('right')}
        >
          ❯
        </button>
      </div>
  
      <div className={styles.dotsNavigation}>
        {products.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentCard ? styles.active : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </>
  );
};

export default CardNavigue;