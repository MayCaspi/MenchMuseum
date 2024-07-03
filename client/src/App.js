import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <Router>
      <div className="App poppins-bold">
        <Routes>
          <Route exact path="/" element={<IntroPage />} />
          <Route exact path="/register" element={<RegistrationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
