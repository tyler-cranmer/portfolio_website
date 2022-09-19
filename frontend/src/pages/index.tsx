import * as React from 'react';
import type { NextPage } from 'next';
import Navbar from '../layout/Navbar';
import Hero from '../components/sections/Hero';
import Footer from '../layout/Footer';
import Projects from '../components/sections/Projects';
import Work from '../components/sections/Work';
import About from '../components/sections/About';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About  />
      <Work/>
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
