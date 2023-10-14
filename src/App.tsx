import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Advantages from './components/Advantages';
import About from './components/About';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Advantages aboutRef={aboutRef} />
        <About aboutRef={ aboutRef} />

      </header>
    </div>
  );
}

export default App;
