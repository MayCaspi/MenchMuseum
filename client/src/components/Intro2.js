// client/src/components/Intro.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';
import MovingCircle from './movingCircle';
import PaginationIndicator from './PaginationIndicator'; // Import the PaginationIndicator component

function Intro2() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/Intro3');
  };
  const handlePrev = () => {
    navigate('/Intro');
  };

  return (
    <div className="Intro">
      <div className="logo">Mensch Edutainment</div>
      <div className="container">
        <div className="symbols">
            <img src='/assets/Symbols.png' alt="Illustration" />
        </div>
        <div className="content">
          <h1>EDIT,UPLOAD AND RECORD</h1>
          <p>
          Edit, upload, and record content effortlessly. Capture audio, video, and photos on your mobile device to manage exhibits and engage visitors.
          </p>
        </div>
        <PaginationIndicator currentPage={2} totalPages={3} /> {/* Add Pagination Indicator */}

      </div>
      <div className="button-container">
            <button className="next" onClick={handleNext}>NEXT</button>
            <button className="prev2" onClick={handlePrev}>PREV</button>
        </div>
        <MovingCircle className="first" size="100px" /> {/* First Circle, larger */}
      <MovingCircle className="second" size="70px" /> {/* Second Circle, smaller */}
      <MovingCircle className="third" size="100px" /> 
        
    </div>
  );
}

export default Intro2;
