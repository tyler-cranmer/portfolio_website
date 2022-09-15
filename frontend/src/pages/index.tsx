import * as React from 'react';
import type { NextPage } from 'next';
import Navbar from '../layout/Navbar';
import Hero from '../components/Hero';
import Footer from '../layout/Footer';
import Projects from '../components/Projects';


const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
