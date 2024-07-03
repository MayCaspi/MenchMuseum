import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroPage from './pages/IntroPage';

function App() {
  return (
    <Router>
      <div className="App poppins-bold">
        <Routes>
          <Route path="/" element={<IntroPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
