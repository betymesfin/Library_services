import React from 'react';

import './App.css';
import { Navbar } from './Layouts/NavbarAndFooter/Navbarcomponent';
import { ExploreTopBooks } from './Layouts/HomePage/ExploreTopBooks';

function App() {
  return (
    <div>
      <Navbar/>
      <ExploreTopBooks/>
    </div>
  );
}

export default App;
