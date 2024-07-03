// src/components/RegistrationForm.js
import React, { useState } from 'react';
import './RegistrationForm.css';
import MovingCircle from '../Intros/movingCircle';


const RegistrationForm = ({ onChoosePlanClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    museumName: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log('Form submitted', formData);
  };

  return (
    <div className='poppins-regular'>
      <form onSubmit={handleSubmit} className="registration-form">
      <div className="LogoMusuem">
            <img src='/assets/LogoMusuem.png' alt="Illustration" />
          </div>
        <h1>Sign Up</h1>
        <p>Please complete your biodata correctly</p>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Re-type your Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="museumName"
            name="museumName"
            placeholder="Museum Name"
            value={formData.museumName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group terms">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            required
          />
          <label htmlFor="terms">I agree to the Terms and Conditions</label>
        </div>
        <button type="button" className="choose-plan-button" onClick={onChoosePlanClick}>Choose a Plan</button>        <p className="login-link">
             Already have an account? <a href="/login">Sign in now</a>
        </p>
      </form>
      <MovingCircle className="first" size="100px" />
      <MovingCircle className="second" size="70px" />
      <MovingCircle className="third" size="100px" />
    </div>
  );
};

export default RegistrationForm;
