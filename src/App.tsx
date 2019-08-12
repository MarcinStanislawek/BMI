import React from 'react';
import './App.css';
import BMICalculator from './components/bmiCalculator';


const App: React.FC = () => {

  return (
    <div className="container">
      <div className="logo">BMI Kalkulator!</div>
        <div className="calculator"><BMICalculator /></div>
    </div>
  );
}

export default App;
