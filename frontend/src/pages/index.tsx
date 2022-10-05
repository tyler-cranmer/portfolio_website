import type { NextPage } from 'next';
import Navbar from '../layout/Navbar';
import Hero from '../components/sections/Hero';
import Footer from '../layout/Footer';
import Experience from '../components/sections/Experience';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Skills from '../components/sections/Skills';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default Home;
