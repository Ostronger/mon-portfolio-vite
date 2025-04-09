import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;