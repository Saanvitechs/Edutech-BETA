import React from 'react';
import HeroSection from './Hero';
import StatsSection from './Stats';
import FeaturesSection from './FeaturesSection';
import Navbar from './Navbar';
import Footer from './Footer';

const NewPageComponent = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default NewPageComponent;
