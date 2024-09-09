import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This program changed the trajectory of my career. The mentorship, real-world projects, and guidance helped me land my dream job!",
      author: "Saksham Srivastava",
      position: "Java Backend Developer"
    },
    {
      quote: "I never imagined I would learn so much in such a short time. The program prepared me for industry challenges like no other.",
      author: "Satyam Verma",
      position: "Full Stack Developer"
    },
    {
      quote: "The hands-on experience and in-depth training made me confident to take on real-world tasks in the tech industry.",
      author: "Abhijeet Saxena",
      position: "Project Manager"
    },
    {
      quote: "I highly recommend this program to anyone looking to upskill and get ahead in the competitive tech field.",
      author: "Sreyashkar",
      position: "Java Developer"
    }
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
