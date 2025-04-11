import React from 'react';
import { useEffect } from "react";
import styles from './ModalInfo.module.css';

interface ModalInfoProps {
  title: string;
  description: string;
  images: string[];
  links?: { label: string; url: string }[];
  onClose: () => void;
}

const ModalInfo: React.FC<ModalInfoProps> = ({ title, description, images, links, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>

        <h2>{title}</h2>

        {/* Description avec retour à la ligne */}
        <p className={styles.description}>{description}</p>

        {/* Galerie d'images */}
        <div className={styles.gallery}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Image ${i}`} className={styles.image} />
          ))}
        </div>

        {/* Liens cliquables */}
        {links && links.length > 0 && (
          <div className={styles.links}>
            {links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalInfo;