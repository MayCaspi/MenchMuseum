import React from 'react';
import MovingCircle from'./MovingCircle.js';

function LoadCircle({ className}) {
  return (
    <>
    <MovingCircle className="first" size="100px" />
    <MovingCircle className="second" size="70px" />
    <MovingCircle className="third" size="100px" />
  </>
  );
}

export default LoadCircle;