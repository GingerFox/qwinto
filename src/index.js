import React from 'react';
import ReactDOM from 'react-dom';
import Dices from './components/Dices/Dices.component';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Dices />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
