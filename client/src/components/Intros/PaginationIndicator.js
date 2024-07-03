import React from 'react';
import './Intro.css';

function PaginationIndicator({ currentPage, totalPages }) {
  const dots = Array.from({ length: totalPages }, (_, index) => {
    let className = 'dot';
    if (currentPage === index + 1) {
      className += ' active';
      if (currentPage === 3) {
        className += ' active2';
      }
    }

    return <div key={index} className={className}></div>;
  });

  return <div className="pagination-indicator">{dots}</div>;
}

export default PaginationIndicator;
