import React from 'react';
import './CollaboratorsSection.css';
import Citigroup from './images/Citigroup.svg'; // Replace with your actual paths
import Amazon from './images/Amazon.svg';
import IBM from './images/IBM.svg';
import Walmart from './images/Walmart.svg';
import Nike from './images/Nike.svg';
import BOA from './images/BOA1.svg';
import GAP from './images/Gap.svg';
import Infosys from './images/infosys.svg';
import TCS from './images/TCS.svg';
import Tupper from './images/tupperware.png';

const CollaboratorsSection = () => {
  const collaborators = [
    { name: 'Citigroup', logo: Citigroup },
    { name: 'Amazon', logo: Amazon },
    { name: 'IBM', logo: IBM },
    { name: 'Walmart', logo: Walmart },
    { name: 'NIKE', logo: Nike },
    { name: 'TCS', logo: TCS },
    { name: 'BOA', logo: BOA },
    { name: 'GAP', logo: GAP },
    { name: 'Infosys', logo: Infosys },
    { name: 'Tupper', logo: Tupper },
  ];

  return (
    <div className="collaborators-section">
      <h2>
        Learn from the Professionals working in 
        <span> Fortune 500 Companies</span>
      </h2>
      <div className="collaborators-logos">
        {collaborators.map((collaborator, index) => (
          <div key={index} className="collaborator-tile">
            <img
              src={collaborator.logo}
              alt={`${collaborator.name} logo`}
              aria-label={`${collaborator.name} logo`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaboratorsSection;
