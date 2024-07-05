import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovingCircle from '../MovingCircle';
import PaginationIndicator from './PaginationIndicator';
import './Intro.css';
import ContentSection from './ContentSection';
import introSteps from '../../data/introSteps';
import LoadCircle from '../LoadCircle';

function Intro() {
    const [currentPage, setCurrentPage] = useState(1);
    const [steps , setSteps] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
      const initialSteps = introSteps.map((step, index) => (
        <ContentSection
          key={index}
          src={step.src}
          alt={step.alt}
          title={step.title}
          content={step.content}
        />
      ));
  
      initialSteps.push(
        <div className="container" key="final">
          <h1>CREATE YOUR VIRTUAL MUSEUM</h1>
          <button className="get-started" onClick={handleGetStarted}>
            GET STARTED &#8594;
          </button>
        </div>
      );
  
      setSteps(initialSteps);
    }, []);

    const handleNext = () => {
      if (currentPage < steps.length) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrev = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleGetStarted = () => {
      navigate('/register');
    };
  
    return (
      
      <div className="Intro">

        <div className="logo">Mensch Edutainment</div>
        {steps[currentPage-1]}
        <PaginationIndicator currentPage={currentPage} totalPages={steps.length} />
        <div className="button-container">
          {currentPage > 1 && currentPage < steps.length && <button className="prev" onClick={handlePrev}>PREV</button>}
          {currentPage < steps.length && <button className="next" onClick={handleNext}>NEXT</button>}
          {currentPage ===  steps.length && <button className="lastPrev" onClick={handlePrev}>PREV</button>}
        </div>
      </div>
      
    );
  }
  
  export default Intro;