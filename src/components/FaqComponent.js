
// export default FAQs;
import React from 'react';
import './FaqComponentStyles.css';

const FaqComponent = () => {
  const faqItems = [
   
      { question: 'How can I apply?', answer: 'Click the "Apply" button on the homepage to get started.' },
      { question: 'What is the course duration?', answer: 'Our programs typically last for 6 months, with intensive hands-on training.' },
      { question: 'Do you offer career support?', answer: 'Yes, we offer career counseling, interview prep, and placement assistance.' },
      { question: 'Is prior experience required?', answer: 'No prior experience required' },
      { question: 'Are there any prerequisites?', answer: 'A passion for learning and a dedication to complete the projects is all you need!' },
    ];

  return (
    <section className="faq-component-section">
      <h2 className="faq-component-title">Frequently Asked Questions</h2>
      <div className="faq-component-content">
        {faqItems.map((faq, index) => (
          <div key={index} className="faq-component-card">
            <h3 className="faq-component-question">{faq.question}</h3>
            <p className="faq-component-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqComponent;
