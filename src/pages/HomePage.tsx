import React from 'react';
import Footer from '../components/Footer';
import FreeShipping from '../components/FreeShipping';
import { HeroHome } from '../components/HeroHome';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroHome />
      <FreeShipping />
      <Footer />
    </>
  );
};

export default HomePage;
