import React from 'react';
import './FeaturesSection.css';
import referIcon from './images/refer.png';
import placement from './images/placement.png';
import place from './images/place.png';
import coding from './images/coding.png';
import project from './images/newproject.png';
import threesixty from './images/threesixty.png';


const FeaturesSection = () => {
  const features = [
    { title: 'Doubt Sessions', description: 'Doubt Sessions to resolves your doubt with our experts', icon: referIcon },
    { title: 'Placement Help', description: 'Interview Prep in line with Indusrty Standard with assessments and feedback', icon: placement },
    { title: '100% Guidance', description: 'We provide 100% guidance to make our students skilled to the industry standards. ', icon: place },
    { title: 'On Job Training', description: 'On Job Training and Internship to get skilled and experienced with the industry standards.', icon: coding },
    { title: 'Live Project Building', description: 'Build a live project from scratch and showcase it and build your resume to increase chances for getting hired', icon: project },
    { title: '360° Assisting Program', description: 'Tailored program to prepare you for industry standards and coding to achieve your dreams.', icon: threesixty }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.icon} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
