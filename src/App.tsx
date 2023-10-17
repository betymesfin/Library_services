import React from 'react';

import './App.css';
import { Navbar } from './Layouts/NavbarAndFooter/Navbarcomponent';
import { HomePage } from './Layouts/HomePage/HomePage';
import { Footer } from './Layouts/NavbarAndFooter/Footer';

export const App = () => {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

