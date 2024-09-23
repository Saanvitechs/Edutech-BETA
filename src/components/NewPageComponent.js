


import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // To get query parameters
import Navbar from './Navbar';
// import Footer from './Footer';
import HeroSection from './Hero';
import StatsSection from './Stats';
import FeaturesSection from './FeaturesSection';
import Testimonials from './Testimonials';
import About from './About';
import Faq from './FaqComponent';
import PricingPlans from './PricingPlan';

const NewPageComponent = () => {
  const pricingRef = useRef(null); // Ref for the PricingPlans section
  const location = useLocation(); // Get the location object to access query parameters

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const planIndex = params.get('plan'); // Get the plan index from the query

     // If no specific plan is requested, scroll to the top
     if (planIndex === null) {
      window.scrollTo(0, 0);
    }

    // If planIndex exists, scroll to PricingPlans section
    if (planIndex !== null && pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <HeroSection pricingRef={pricingRef}/>
      <StatsSection />
      <FeaturesSection />
      <Testimonials />
      <div ref={pricingRef}> 
        <PricingPlans planIndex={new URLSearchParams(location.search).get('plan')} /> {/* Pass planIndex as prop */}
      </div>
      <About />
      <Faq />
      {/* <Footer /> */}
    </div>
  );
};

export default NewPageComponent;
