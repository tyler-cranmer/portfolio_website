import * as React from 'react';
import type { NextPage } from 'next';
import Navbar from '../layout/Navbar';
import Hero from '../components/sections/Hero';
import Footer from '../layout/Footer';
import Work from '../components/sections/Work';
import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import Expertise from '../components/sections/Expertise';
const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Expertise/>
      <Portfolio />
      <Work />
      <Footer />
    </>
  );
};

export default Home;
