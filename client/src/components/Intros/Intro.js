import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';
import MovingCircle from './movingCircle';
import PaginationIndicator from './PaginationIndicator';

function Intro({ handleNext }) {
  const navigate = useNavigate();

  return (
    <div className="Intro">
      <div className="logo">Mensch Edutainment</div>
      <div className="container">
        <div className="illustration">
          <img src='/assets/people.png' alt="Illustration" />
        </div>
        <div className="content">
          <h1>CREATE AN APP FOR YOUR MUSEUM</h1>
          <p>
            Transform your museum with our Interactive Guide! Manage exhibits
            and engage visitors using our user-friendly app.
          </p>
        </div>
        <PaginationIndicator currentPage={1} totalPages={3} />
        <button className="next" onClick={handleNext}>NEXT</button>
      </div>
      <MovingCircle className="first" size="100px" />
      <MovingCircle className="second" size="70px" />
      <MovingCircle className="third" size="100px" />
    </div>
  );
}

export default Intro;
