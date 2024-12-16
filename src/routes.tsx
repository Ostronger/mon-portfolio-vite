import React from 'react';

// Importation des pages
import HomePage from './pages/HomePage';

export interface Route {
    path: string;
    label: string;
    element: React.ReactNode;
    parent?: string;
  }

  // Configuration des routes
  const routes: Route[] = [
    { path: '/', label: 'Home', element: <HomePage /> },

  ];

  export default routes;