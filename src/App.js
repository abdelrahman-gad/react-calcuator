import React from 'react';

import './App.css';
import Calulator from './components/Calculator';
import CalcContextProvider  from './contexts/CalcContext';

function App() {
  return (
    <CalcContextProvider>
      <Calulator />
    </CalcContextProvider>  
  );
}

export default App;
