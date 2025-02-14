import React from 'react';

// Importation des pages
import HomePage from './pages/HomePage';
import PlaceholderPage from './pages/PlaceholderPage'; // Import du PlaceholderPage
import NotFoundPage from './pages/NotFoundPage';
import VeilleTechnologique from './pages/VeilleTechnologique';

export interface Route {
    path: string;
    label: string;
    element: React.ReactNode;
    parent?: string;
  }

  // Configuration des routes
  const routes: Route[] = [
    { path: '/', label: 'Lukamba Kasa', element: <HomePage /> },
    { path: '/about', label: 'À propos', element: <PlaceholderPage title="À propos" /> },
    { path: '/bts-sio', label: 'BTS SIO', element: <PlaceholderPage title="BTS SIO" /> },
    { path: '/projects', label: 'Projets', element: <PlaceholderPage title="Projets" /> },
    { path: '/veille', label: 'Veille Technologique', element: <VeilleTechnologique  /> },
    { path: '/contact', label: 'Contact', element: <PlaceholderPage title="Contact" /> },
    { path: '*', label: '404', element: <NotFoundPage /> },

  ];

  export default routes;