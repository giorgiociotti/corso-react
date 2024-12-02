import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ThemeSwitcher from './Components/ThemeSwitcher';

function App() {
  return (
    <>
      <Navbar />
      <ThemeSwitcher /> {/* Aggiungi lo switcher per cambiare tema */}
      <Footer />
    </>
  );
}

export default App;