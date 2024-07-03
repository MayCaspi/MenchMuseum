// src/pages/RegistrationPage.js
import React, { useState } from 'react';
import RegistrationForm from '../components/Register/RegistrationForm';
import ChoosePlan from '../components/Register/ChoosePlan';
import '../components/Register/RegistrationForm.css';

const RegistrationPage = () => {
  const [showChoosePlan, setShowChoosePlan] = useState(false);

  const handleChoosePlanClick = () => {
    setShowChoosePlan(true);
  };

  const handleCancelClick = () => {
    setShowChoosePlan(false);
  };


  return (
    <div className="registration-page">
      {showChoosePlan ? (
        <ChoosePlan handleCancel={handleCancelClick} />
      ) : (
        <RegistrationForm onChoosePlanClick={handleChoosePlanClick} />
      )}
    </div>
  );
};

export default RegistrationPage;
