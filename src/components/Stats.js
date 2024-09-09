import React from 'react';
import './Stats.css';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stat-item">
          <h2>100%</h2>
          <p>Guidance</p>
        </div>
        <div className="stat-item">
          <h2>500+</h2>
          <p>Onboards</p>
        </div>
        <div className="stat-item">
          <h2>1000+</h2>
          <p>Registered Students</p>
        </div>
        <div className="stat-item">
          <h2>1000+</h2>
          <p>Class Attented</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
