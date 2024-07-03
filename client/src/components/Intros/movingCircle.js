import React from 'react';
import './Intro.css';

function MovingCircle({ className, size }) {
  return (
    <div 
      className={`moving-circle ${className}`} 
      style={{ width: size, height: size }}
    ></div>
  );
}

export default MovingCircle;
