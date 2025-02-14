import React from "react";
import MultiFeedlyRSS from "../components/MultiFeedlyRSS";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const VeilleTechnologique: React.FC = () => {
  const feedUrls = [
    "https://siecledigital.fr/intelligence-artificielle/feed/",
    "https://www.actuia.com/feed/",
    "http://www.pauljorion.com/blog/category/intelligence-artificielle/feed/",
  ];

  return (
    <div>
        <Navbar /> 
      <h1>Veille Technologique</h1>
      <MultiFeedlyRSS feedUrls={feedUrls} />
        <Footer />
    </div>
  );
};

export default VeilleTechnologique;