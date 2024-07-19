import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Content from './pages/content';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Navbar></Navbar>
        </header>
        <main>
          <Content></Content>
        </main>
    </div>
  );
}

export default App;
