// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import routes from './routes'; // Import de la configuration centralisée des routes
import './App.css'



const App: React.FC  =() => {
  return (
    <Router>
      <AnimatePresence>
       <Routes location={location} key={location.pathname}>
      {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
