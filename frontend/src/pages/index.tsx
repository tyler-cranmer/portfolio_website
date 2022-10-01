import * as React from 'react';
import type { NextPage } from 'next';
import Navbar from '../layout/Navbar';
import Hero from '../components/sections/Hero';
import Footer from '../layout/Footer';
import Experience from '../components/sections/Experience';
import About from '../components/sections/About';
import Work from '../components/sections/Work';
import Contact from '../components/sections/Contact'
import Expertise from '../components/sections/Expertise';
import theme from '../theme';


const Home: NextPage = () => {
  return (
    <>

        <Navbar />
        <Hero />
        <About />
        <Expertise />
        <Work />
        <Experience />
        <Contact />
        <Footer />

    </>
  );
};

export default Home;
