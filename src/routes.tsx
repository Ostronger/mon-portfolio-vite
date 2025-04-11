import React from 'react';

// Importation des pages
import HomePage from './pages/HomePage';
import PlaceholderPage from './pages/PlaceholderPage'; // Import du PlaceholderPage
import NotFoundPage from './pages/NotFoundPage';
import VeilleTechnologique from './pages/VeilleTechnologique';
import About from './pages/About';
import Projects from './pages/Projects';
import BtsSio from './pages/BtsSio';

export interface Route {
    path: string;
    label: string;
    element: React.ReactNode;
    parent?: string;
  }

  // Configuration des routes
  const routes: Route[] = [
    { path: '/', label: 'Mon portfolio', element: <HomePage /> },
    { path: '/about', label: 'À propos', element: <About /> },
    { path: '/bts-sio', label: 'BTS SIO', element: <BtsSio /> },
    { path: '/projects', label: 'Mes projets', element: <Projects /> },
    { path: '/veille', label: 'Veille Technologique', element: <VeilleTechnologique  /> },
    { path: '/contact', label: 'Contact', element: <PlaceholderPage title="Contact" /> },
    { path: '*', label: '404', element: <NotFoundPage /> },

  ];

  export default routes;