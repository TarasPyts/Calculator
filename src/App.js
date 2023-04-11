import { useState, useEffect } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import './App.css';

function App() {
  const [result, setResult] = useState('');

  const handleNumberClick = (number) => {
    setResult(result + number);
  };

  const handleOperatorClick = (operator) => {
    setResult(
      result.includes('+') ||
        result.includes('-') ||
        result.includes('*') ||
        result.includes('/')
        ? result.replace(/[\+\-\*/]/, operator)
        : result + operator
    );
  };

  const handleEqualsClick = () => {
    try {
      const a = eval(result);
      setResult(a.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClearClick = () => {
    setResult('');
  };

  useEffect(() => {
    const calculatorStorage = localStorage.getItem('result');
    if (calculatorStorage) {
      setResult(JSON.parse(calculatorStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('result', JSON.stringify(result));
  }, [result]);

  return (
    <div className="App">
      <h1>Calculator</h1>
      <Display result={result} />
      <Keypad
        onNumberClick={handleNumberClick}
        onOperatorClick={handleOperatorClick}
        onEqualsClick={handleEqualsClick}
        onClearClick={handleClearClick}
      />
    </div>
  );
}

export default App;
