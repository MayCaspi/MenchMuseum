import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';
import PaginationIndicator from './PaginationIndicator';

function Intro3({ handlePrev }) {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register');
  };

  return (
    <div className="Intro Intro3">
      <div className="logo2">Mensch Edutainment</div>
      <div className="container3">
        <h1>CREATE YOUR VIRTUAL MUSEUM</h1>
        <button className="get-started" onClick={handleGetStarted}>
          GET STARTED &#8594;
        </button>
        <PaginationIndicator currentPage={3} totalPages={3} />
        <div className="button-container">
          <button className="prev" onClick={handlePrev}>PREV</button>
        </div>
      </div>
    </div>
  );
}

export default Intro3;
