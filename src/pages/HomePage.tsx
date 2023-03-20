import React from 'react';
import FollowUs from '../components/FollowUs';
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
      <FollowUs />
      <Footer />
    </>
  );
};

export default HomePage;
