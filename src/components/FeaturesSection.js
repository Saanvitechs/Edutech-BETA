import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    { title: 'Referrals Provided', description: 'Referrals to 40 Dream Companies like Amazon, Cred, Akamai, etc.', icon: 'referrals.svg' },
    { title: 'Placement Drives Provided', description: 'Sit for our Placement Drives of 15+ Dream Companies and perform well.', icon: 'placement.svg' },
    { title: '100% Placements', description: 'All previous batches have had 100% placements. Check our placement record.', icon: 'placements.svg' },
    { title: 'Full Stack Internship', description: 'Full Stack Training and Internship by Amazon-placed seniors.', icon: 'internship.svg' },
    { title: 'Live Project Building', description: 'Build a live project from scratch and showcase it in your resume.', icon: 'project.svg' },
    { title: '360° Placement Program', description: 'Tailored program to prepare you for on-campus and off-campus placements.', icon: 'placement360.svg' }
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
