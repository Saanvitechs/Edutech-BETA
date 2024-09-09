import React, { useRef, useEffect } from 'react';
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
  useEffect(() => {
    // Scroll to the top whenever the component is rendered
    window.scrollTo(0, 0);
  }, []);
  const pricingRef = useRef(null); // Reference to PricingPlans

  return (
    <div>
      <Navbar />
      <HeroSection pricingRef={pricingRef} /> {/* Pass ref to Hero */}
      <StatsSection />
      <FeaturesSection />
      <Testimonials />
      <div ref={pricingRef}> {/* Assign ref here */}
        <PricingPlans />
      </div>
      <Referral />
      <About />
      <Faq />
      <Footer />
    </div>
  );
};

export default NewPageComponent;
