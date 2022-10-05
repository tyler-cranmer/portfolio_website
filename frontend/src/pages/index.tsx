import React from 'react';
import type { NextPage } from 'next';
import Navbar from '../layout/Navbar';
import Hero from '../components/sections/Hero';
import Footer from '../layout/Footer';
import Experience from '../components/sections/Experience';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Skills from '../components/sections/Skills';
import SideBar from '../layout/SideBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const Home: NextPage = () => {
  const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
      defaultMatches: true,
    });
  
    const [openSidebar, setOpenSidebar] = React.useState(false);

    const handleSidebarOpen = () => {
      setOpenSidebar(true);
    };

    const handleSidebarClose = () => {
      setOpenSidebar(false);
    };

    const open = isLg ? false : openSidebar;


  return (
    <>
      <Navbar onSidebarOpen={handleSidebarOpen} />
      <Hero />
      <SideBar onClose={handleSidebarClose} open={open} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
