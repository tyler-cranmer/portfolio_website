import * as React from 'react';
import type { NextPage } from 'next';
import Navbar from '../layout/Navbar';
import Hero from '../components/sections/Hero';
import Footer from '../layout/Footer';
import Experience from '../components/sections/Experience';
import About from '../components/sections/About';
import Work from '../components/sections/Work';
import Expertise from '../components/sections/Expertise';
import Hero2 from '../components/sections/Hero2';
import { Box } from '@mui/material';
import theme from '../theme';
const Home: NextPage = () => {
  return (
    <>
      <Box
        sx={{
          padding: 0,
          margin: 0,
          backgroundColor: theme.palette.grey[900],
        }}>
        <Navbar />
        <Hero2 />
        <Expertise />
        <About />
        <Work />
        <Experience />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
