import React, { useState } from 'react';
import Intro from '../components/Intros/Intro';
import Intro2 from '../components/Intros/Intro2';
import Intro3 from '../components/Intros/Intro3';
import '../components/Intros/Intro.css';

function SinglePageIntro() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      {currentPage === 1 && <Intro handleNext={handleNext} />}
      {currentPage === 2 && <Intro2 handleNext={handleNext} handlePrev={handlePrev} />}
      {currentPage === 3 && <Intro3 handlePrev={handlePrev} />}
    </div>
  );
}

export default SinglePageIntro;
