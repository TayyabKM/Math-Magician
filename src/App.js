import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculatorPage/calculator';
import DisplayQuote from './components/calculatorPage/DisplayQuote';
import HomePage from './components/homePage/home';
import Navbar from './components/navbarHeading/navbar';

function App() {
  return (
    <div className="pp">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/calculator"
          element={(
            <div>
              <Calculator />
              <DisplayQuote />
            </div>
)}
        />
      </Routes>
    </div>
  );
}

export default App;
