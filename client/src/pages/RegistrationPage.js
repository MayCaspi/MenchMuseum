// src/pages/RegistrationPage.js
import React, { useState } from 'react';
import RegistrationForm from '../components/Register/RegistrationForm';
import ChoosePlan from '../components/Register/ChoosePlan';
import '../components/Register/RegistrationForm.css';
import Payment from '../components/Register/payment';

const RegistrationPage = () => {
  const [stage, setStage] = useState('registration');
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleChoosePlanClick = () => {
    setStage('choosePlan');
  };

  const handlePlanSelected = (plan) => {
    setSelectedPlan(plan);
    setStage('payment');
  };

  const handleBackToChoosePlan = () => {
    setStage('choosePlan');
  };

  const handleCancel = () => {
    setStage('registration');
  };

  return (
    <div className="registration-page">
      {stage === 'registration' && (
        <RegistrationForm onChoosePlanClick={handleChoosePlanClick} />
      )}
      {stage === 'choosePlan' && (
        <ChoosePlan handleCancel={handleCancel} handleContinue={handlePlanSelected} />
      )}
      {stage === 'payment' && (
        <Payment selectedPlan={selectedPlan} handleBack={handleBackToChoosePlan} />
      )}
    </div>
  );
};

export default RegistrationPage;
