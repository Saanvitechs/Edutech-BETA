import React from 'react';
import './CollaboratorsSection.css';
import Citigroup from './images/Citigroup.svg'; // Replace with your actual paths
import Amazon from './images/Amazon.svg';
import IBM from './images/IBM.svg';
import Walmart from './images/Walmart.svg';
import Nike from './images/Nike.svg';
import backbase from './images/BOA.svg';
import GAP from './images/Gap.svg';
import infosys from './images/infosys.svg';
import SpiceMoney from './images/Spice Money.svg';
import Tupper from './images/tupperware.svg'


const CollaboratorsSection = () => {
  const collaborators = [
    { name: 'Citigroup', logo: Citigroup },
    { name: 'Amazon', logo: Amazon },
    { name: 'IBM', logo: IBM },
    { name: 'Walmart', logo: Walmart },
    { name: 'NIKE', logo: Nike },
    { name: 'BOA', logo: backbase },
    { name: 'GAP', logo: GAP },
    { name: 'Infosys', logo: infosys },
    { name: 'SpiceCompany', logo: SpiceMoney },
    { name: 'Tupper', logo: Tupper } 
  ];

  return (
    <div className="collaborators-section">
      <h2>Learn from the Professionals working in  <span> Fortune 500 Companies</span></h2>
      <div className="collaborators-logos">
        {collaborators.map((collaborator, index) => (
          <div key={index} className="collaborator">
            <img src={collaborator.logo} alt={`${collaborator.name} logo`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaboratorsSection;
