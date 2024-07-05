import React, { useState } from 'react';
import './RegistrationForm';

const Payment = ({ selectedPlan, handleBack }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    email: '',
    address: '',
    country: 'United States',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle payment submission
    console.log('Payment details submitted', paymentDetails);
  };

  const planPrices = {
    Basic: 100,
    Premium: 300,
    VIP: 900,
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <div className="order-summary">
          <h2>Order Summary</h2>
          <p className="plan-name">{selectedPlan} Plan</p>
          <p className="plan-price">${planPrices[selectedPlan]}</p>
          <p>Subtotal: ${planPrices[selectedPlan]}</p>
          <p>Tax: $0.00</p>
          <hr className="total-separator" />
          <p className="total-price">Total: ${planPrices[selectedPlan]}</p>
          </div>
        <div className="payment-form-container">
          <h2 className="payment-header">Payment</h2>
          <form onSubmit={handleSubmit} className="payment-form">
            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Email'
                value={paymentDetails.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address"></label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder='Shipping Adress'
                value={paymentDetails.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="country"></label>
              <select
                id="country"
                name="country"
                value={paymentDetails.country}
                onChange={handleChange}
              >
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Israel">Israel</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            <div className="form-group card-input-group">
                <label htmlFor="cardNumber">Card Details:</label>
                <div className="card-input-wrapper">
                    <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder='1234 2123 4049 1929'
                    value={paymentDetails.cardNumber}
                    onChange={handleChange}
                    required
                    />
                    <div className="card-icons">
                    <i className="fab fa-cc-visa"></i>
                    <i className="fab fa-cc-mastercard"></i>
                    <i className="fab fa-cc-amex"></i>
                    <i className="fab fa-cc-discover"></i>
                    </div>
                </div>
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate"></label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM / YY"
                value={paymentDetails.expiryDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv"></label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder='CVV'
                value={paymentDetails.cvv}
                onChange={handleChange}
                required
              />
            </div>
            <div className="payment-actions">
                <button type="button" className="back-button" onClick={handleBack}>
                    <span className="back-arrow">&lt;</span> Back
                </button>
                <button type="submit" className="pay-button">
                    Pay Now ${planPrices[selectedPlan]}
                    <i className="fas fa-shopping-cart"></i>
                </button>
                </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;