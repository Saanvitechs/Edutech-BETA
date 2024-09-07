import React from 'react';
import './Platforms.css';

const Platforms = () => {
  return (
    <section className="platforms">
      <h2>Available on Multiple Platforms</h2>
      <div className="platform-logos">
        <img src="/assets/android-logo.png" alt="Android" />
        <img src="/assets/ios-logo.png" alt="iOS" />
        <img src="/assets/web-logo.png" alt="Web" />
      </div>
    </section>
  );
};

export default Platforms;
