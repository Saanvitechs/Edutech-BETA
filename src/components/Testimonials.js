import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Joining this course was the best decision I've ever made. The knowledge I gained has been invaluable!",
      author: "Jane Doe",
      position: "Software Engineer at Google"
    },
    {
      quote: "The mentors and guidance provided are top-notch. I feel prepared for anything!",
      author: "John Smith",
      position: "Full Stack Developer at Microsoft"
    },
    {
      quote: "I would recommend this program to anyone looking to elevate their career in tech.",
      author: "Emily Johnson",
      position: "Product Manager at Amazon"
    },
  ];

  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Students Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">"{testimonial.quote}"</p>
            <p className="testimonial-author">- {testimonial.author}, {testimonial.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
