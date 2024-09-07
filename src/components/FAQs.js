import React from 'react';
import './FAQs.css';

const FAQs = () => {
  return (
    <section className="faqs">
      <h2>Frequently Asked Questions</h2>
      <div className="faq">
        <h3>How can I sign up?</h3>
        <p>You can sign up by clicking the 'Get Started' button and filling in your details.</p>
      </div>
      <div className="faq">
        <h3>What platforms do you support?</h3>
        <p>We support Android, iOS, and web platforms.</p>
      </div>
    </section>
  );
};

export default FAQs;
