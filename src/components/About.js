import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h2>About TREx</h2>
      <p>
        We are committed to providing a learning experience that goes beyond traditional education. Our mission is to equip individuals with the skills, confidence, and real-world experience needed to thrive in the tech industry.
      </p>
      <p>
        Our exclusive training programs are meticulously designed to ensure every participant is ready to face the dynamic challenges of the job market. With hands-on training, live projects, and a focus on cutting-edge technologies, TREx offers a fast track to success.
      </p>
      <div className="about-features">
        <div className="feature-item">
          <h3>Industry-Relevant Curriculum</h3>
          <p>Courses built around real-world tech stacks and industry demands.</p>
        </div>
        <div className="feature-item">
          <h3>Expert Mentors</h3>
          <p>Mentorship from top professionals at companies like Google and Microsoft.</p>
        </div>
        <div className="feature-item">
          <h3>Career Support</h3>
          <p>Career counseling, interview prep, and guaranteed placements.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
