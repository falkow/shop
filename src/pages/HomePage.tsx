import { Outlet } from 'react-router-dom';
import FollowUs from '../components/FollowUs';
import Footer from '../components/Footer';
import FreeShipping from '../components/FreeShipping';
import { HeroHome } from '../components/HeroHome';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      {/* <Outlet /> */}
      <HeroHome />
      <FreeShipping />
      <FollowUs />
      <Footer />
    </>
  );
};

export default HomePage;
