// client/src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';
import PaginationIndicator from './PaginationIndicator'; // Import the PaginationIndicator component

function Intro3() {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate('/Intro2');
  };

  const handleNext = () => {
  };

  return (
    <div className="Intro3"> 
      <div className="logo2">Mensch Edutainment</div>
      <div className="container3">
        <h1>CREATE YOUR VIRTUAL MUSEUM</h1>
        <button className="get-started" onClick={handleNext}>GET STARTED &#8594;</button>
        <PaginationIndicator currentPage={3} totalPages={3} /> {/* Add Pagination Indicator */}

        <div className="button-container">
          <button className="prev" onClick={handlePrev}>PREV</button>
        </div>
      </div>
    </div>
  );
}

export default Intro3;
