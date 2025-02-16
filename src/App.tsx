import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Form } from './components/Form';
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={menuOpen ? 'blurred' : ''}>
        <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <Hero />
        <Services />
        <Process />
        <Form />
        <Footer />
      </div>
      {menuOpen && <div className="overlay" onClick={toggleMenu} />}
    </>
  );
}

export default App;
