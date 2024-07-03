// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './components/Intro';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';

function App() {
  return (
    <Router>
      <div className="App" class = "poppins-bold" >
        <Routes>
          <Route path="/Intro" element={<Intro />} />
          <Route path="/Intro2" element={<Intro2 />} />
          <Route path="/Intro3" element={<Intro3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
