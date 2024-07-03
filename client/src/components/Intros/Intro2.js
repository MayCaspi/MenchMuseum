import React from 'react';
import './Intro.css';
import MovingCircle from './movingCircle';
import PaginationIndicator from './PaginationIndicator';

function Intro2({ handleNext, handlePrev }) {
  return (
    <div className="Intro">
      <div className="logo">Mensch Edutainment</div>
      <div className="container">
        <div className="symbols">
          <img src='/assets/Symbols.png' alt="Illustration" />
        </div>
        <div className="content">
          <h1>EDIT, UPLOAD AND RECORD</h1>
          <p>
            Edit, upload, and record content effortlessly. Capture audio, video, and photos on your mobile device to manage exhibits and engage visitors.
          </p>
        </div>
        <PaginationIndicator currentPage={2} totalPages={3} />
      </div>
      <div className="button-container">
        <button className="prev2" onClick={handlePrev}>PREV</button>
        <button className="next" onClick={handleNext}>NEXT</button>
      </div>
      <MovingCircle className="first" size="100px" />
      <MovingCircle className="second" size="70px" />
      <MovingCircle className="third" size="100px" />
    </div>
  );
}

export default Intro2;
