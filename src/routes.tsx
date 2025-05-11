// routes.tsx
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import VeilleTechnologique from './pages/VeilleTechnologique';
import About from './pages/About';
import Projects from './pages/Projects';
import BtsSio from './pages/BtsSio';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import SuccessPage from './pages/SuccessPage';

export interface Route {
  path: string;
  label?: string;
  element: React.ReactNode;
}

export const allRoutes: Route[] = [
  { path: '/', label: 'Mon portfolio', element: <HomePage /> },
  { path: '/about', label: 'À propos', element: <About /> },
  { path: '/bts-sio', label: 'BTS SIO', element: <BtsSio /> },
  { path: '/projects', label: 'Mes projets', element: <Projects /> },
  { path: '/projects/:slug', element: <ProjectDetail /> },
  { path: '/veille', label: 'Veille Technologique', element: <VeilleTechnologique /> },
  { path: '/contact', label: 'Contact', element: <Contact/> },
  { path: '/success', element: <SuccessPage /> },
  { path: '*', label: '404', element: <NotFoundPage /> }
];

// ⬇️ Uniquement les routes avec un label pour la navbar
export const navRoutes = allRoutes.filter(route => route.label); 