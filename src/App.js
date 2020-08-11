import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import Twittes from './components/Twittes'
import Right from './components/Right'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Twittes />
      <Right />
    </div>
  );
}

export default App;
