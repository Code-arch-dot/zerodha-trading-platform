import React from 'react';
import KiteConnect from './KiteConnect.js'
import Education from './Education.js'
import Hero from './Hero.js';
import Stats from './Stats.js';
import Pricing from './Pricing.js';

import OpenAccount from '../OpenAccount.js'
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';



function HomePage() {
    return (
         <>
          <Navbar/>
          <Hero/>
          <Stats/>
          <KiteConnect/>
          <Pricing />
          <Education/>
          <OpenAccount/>
          <Footer/>

         </>
          );
}

export default HomePage;