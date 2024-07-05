// src/components/ChoosePlan.js
import React, { useState } from 'react';
import './RegistrationForm.css';


const ChoosePlan = ({ handleCancel, handleContinue }) => {
  const [selectedPlan, setSelectedPlan] = useState('');

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    console.log(`Selected plan: ${plan}`);
  };

  const handleContinueClick = () => {
    if (selectedPlan) {
      handleContinue(selectedPlan);
    } else {
      alert('Please select a plan before continuing.');
    }
  };

  return (
    <div>
      <div className="choose-plan-container">
        <h2 className="choose-plan-header">Choose a Plan</h2>
        <div className="choose-plan-content">
          <div
            className={`plan ${selectedPlan === 'Basic' ? 'selected-plan' : ''}`}
            onClick={() => handlePlanClick('Basic')}
          >
            <h3>Basic Plan</h3>
            <p className="plan-price">$100</p>
            <ul className="plan-details">
              <li>✔ Exhibitions: Up to 20 exhibitions</li>
              <li>✔ Artworks: Manage up to 100 artworks</li>
              <li>✔ Features: Free editing, uploading, and recording of content</li>
            </ul>
          </div>
          <div
            className={`plan ${selectedPlan === 'Premium' ? 'selected-plan' : ''}`}
            onClick={() => handlePlanClick('Premium')}
          >
            <h3>Premium Plan</h3>
            <p className="plan-price">$300</p>
            <ul className="plan-details">
              <li>✔ Exhibitions: Up to 50 exhibitions</li>
              <li>✔ Artworks: Manage up to 500 artworks</li>
              <li>✔ Features: All Basic features + exclusive content access</li>
            </ul>
          </div>
          <div
            className={`plan ${selectedPlan === 'VIP' ? 'selected-plan' : ''}`}
            onClick={() => handlePlanClick('VIP')}
          >
            <h3>VIP Plan</h3>
            <p className="plan-price">$900</p>
            <ul className="plan-details">
              <li>✔ Exhibitions: Unlimited exhibitions</li>
              <li>✔ Artworks: Unlimited artworks</li>
              <li>✔ Features: All Premium features + VIP support and events</li>
            </ul>
          </div>
        </div>
        <div className="choose-plan-actions">
          <button className="cancel-button" onClick={handleCancel}>Cancel</button>
          <button className="continue-button" onClick={handleContinueClick}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
