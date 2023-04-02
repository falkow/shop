import { BehindGreenDoor } from '../../assets/BehindGreenDoor';
import { Link } from '@mui/material';
import FacebookSVG from '../../assets/Facebook';
import InstagramSVG from '../../assets/InstagramSVG';
import YoutubeSVG from '../../assets/YoutubeSVG';

import styles from './rwd.module.scss';

const { wrapper, wrapperLogo, wrapperMedia, wrapperMediaSVG, wrapperLinks } =
  styles;

const Footer = () => {
  return (
    <footer className={wrapper}>
      <div className={wrapperLogo}>
        <BehindGreenDoor />
      </div>

      <div className={wrapperLinks}>
        <Link href='/'>Home</Link>
        <Link href='/shop'>Shop</Link>
        <Link href='#'>Contact</Link>
        <Link href='#'>Regulations</Link>
      </div>
      <div className={wrapperMedia}>
        <p>FOLLOW US</p>
        <div className={wrapperMediaSVG}>
          <FacebookSVG />
          <InstagramSVG />
          <YoutubeSVG />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
