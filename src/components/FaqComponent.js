// import React, { useState } from 'react';
// import './FAQs.css';

// const FAQs = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const faqData = [
//     { question: 'How can I apply?', answer: 'Click the "Apply" button on the homepage to get started.' },
//     { question: 'What is the course duration?', answer: 'Our programs typically last for 6 months, with intensive hands-on training.' },
//     { question: 'Do you offer career support?', answer: 'Yes, we offer career counseling, interview prep, and placement assistance.' },
//     { question: 'Is prior experience required?', answer: 'No, our courses cater to all levels, including beginners.' },
//     { question: 'Are there any prerequisites?', answer: 'A passion for learning and a dedication to complete the projects is all you need!' },
//   ];

//   return (
//     <section className="faqs">
//       <h2>Frequently Asked Questions</h2>
//       <div className="faq-list">
//         {faqData.map((faq, index) => (
//           <div
//             className={`faq ${activeIndex === index ? 'active' : ''}`}
//             key={index}
//             onClick={() => toggleFAQ(index)}
//           >
//             <h3>{faq.question}</h3>
//             {activeIndex === index && <p>{faq.answer}</p>}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQs;
import React from 'react';
import './FaqComponentStyles.css';

const FaqComponent = () => {
  const faqItems = [
    {
      question: "How can I sign up?",
      answer: "You can sign up by clicking the 'Get Started' button and filling in your details."
    },
    {
      question: "What platforms do you support?",
      answer: "We support Android, iOS, and web platforms."
    },
    {
      question: "Is there a trial period?",
      answer: "Yes, we offer a 14-day trial period for all new users."
    },
    {
      question: "What is the refund policy?",
      answer: "We offer a full refund within the first 30 days of subscription if you are not satisfied."
    }
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
