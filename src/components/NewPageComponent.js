import React from 'react';
import HeroSection from './Hero';
import StatsSection from './Stats';
import FeaturesSection from './FeaturesSection';
import Navbar from './Navbar';
import Footer from './Footer';
import Testimonials from './Testimonials';
import Referral from './Referrals';
import Faq from './FaqComponent';
import About from './About';
import PricingPlans from './PricingPlan';

const NewPageComponent = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <Testimonials />
      <PricingPlans />
      <Referral />
      <About />
      <Faq />
      <Footer />
    </div>
  );
};

export default NewPageComponent;
