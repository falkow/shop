import React from 'react';
import FacebookSVG from '../../assets/Facebook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';

import styles from './Footer.module.scss';
import InstagramSVG from '../../assets/Instagram';
import { BehindGreenDoor } from '../../assets/BehindGreenDoor';
import { Link } from '@mui/material';

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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
