import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';
import MovingCircle from './movingCircle'; // Import the MovingCircle component
import PaginationIndicator from './PaginationIndicator'; // Import the PaginationIndicator component

function Intro() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/Intro2');
  };

  return (
    <div className="Intro">
      <div className="logo">Mensch Edutainment</div>
      <div className="container">
        <div className="illustration">
          <img src='/assets/people.png' alt="Illustration" />
        </div>
        <div className="content">
          <h1 >CREATE AN APP FOR YOUR MUSEUM</h1>
          <p>
            Transform your museum with our Interactive Guide! Manage exhibits
            and engage visitors using our user-friendly app.
          </p>
        </div>
        <PaginationIndicator currentPage={1} totalPages={3} /> {/* Add Pagination Indicator */}

        <button className="next" onClick={handleNext}>NEXT</button>
      </div>
      <MovingCircle className="first" size="100px" /> {/* First Circle, larger */}
      <MovingCircle className="second" size="70px" /> {/* Second Circle, smaller */}
      <MovingCircle className="third" size="100px" /> {/* Second Circle, smaller */}

    </div>
  );
}

export default Intro;
