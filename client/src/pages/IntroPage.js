import React from 'react';
import Intro from '../components/Intros/Intro';
import '../components/Intros/Intro.css';
import LoadCircle from '../components/LoadCircle';

function IntroPage() {
  return (
    <div>
      <Intro />
      <LoadCircle/>
    </div>
  );
}

export default IntroPage;