import React from 'react';
import Footer from '../components/Footer';
import { Home } from '../components/Home';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default HomePage;