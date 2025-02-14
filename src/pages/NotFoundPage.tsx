import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      <Link to="/" style={{ color: '#007BFF', textDecoration: 'underline' }}>
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFoundPage;