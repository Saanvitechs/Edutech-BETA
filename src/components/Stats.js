import React from 'react';
import './Stats.css';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stat-item">
          <h2>100%</h2>
          <p>Placements</p>
        </div>
        <div className="stat-item">
          <h2>1300+</h2>
          <p>Cracked Dream Companies</p>
        </div>
        <div className="stat-item">
          <h2>70+</h2>
          <p>Placed in Amazon</p>
        </div>
        <div className="stat-item">
          <h2>2000+</h2>
          <p>Students Placed</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
