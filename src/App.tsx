import React from 'react';
import './App.css';
import { render } from 'react-dom';
import BMICalculator from './components/index';


const App: React.FC = () => {

  return (
    <div className="App">
      <div className="logo">BMI Kalkulator!</div>
        <BMICalculator />
    </div>
  );
}

export default App;
