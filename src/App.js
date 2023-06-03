import { useState } from 'react';
import './App.css';
import MakeCircles from './components/Circle';
import Timer from './components/ClickTimer';

function App() {

  return (
    
    <div className="App">
      <header className="App-header">
        <MakeCircles />
      </header>
    </div>
  );
}

export default App;
