import * as React from 'react';
import type { NextPage } from 'next';
import Navbar from '../layout/Navbar';
import Hero from '../components/sections/Hero';
import Footer from '../layout/Footer';
import Experience from '../components/sections/Experience';
import About from '../components/sections/About';
import Work from '../components/sections/Work';
import Expertise from '../components/sections/Expertise';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Work/>
      <Experience />
      <Footer />
    </>
  );
};

export default Home;
