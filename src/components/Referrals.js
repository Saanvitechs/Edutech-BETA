import React from 'react';
import './Referrals.css';

const Referral = () => {
  return (
    <section className="referral-section">
      <h2 className="section-title">Refer a Friend</h2>
      <div className="referral-content">
        <p className="referral-text">
          Know someone who could benefit from TREx? Refer them and help them succeed while earning exciting rewards!
        </p>
        <button className="referral-button">Refer Now</button>
      </div>
    </section>
  );
};

export default Referral;
