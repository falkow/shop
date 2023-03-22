import React from 'react';
import FacebookSVG from '../../assets/Facebook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';

import styles from './rwd.module.scss';
import InstagramSVG from '../../assets/InstagramSVG';
import { BehindGreenDoor } from '../../assets/BehindGreenDoor';
import { Link } from '@mui/material';
import YoutubeSVG from '../../assets/YoutubeSVG';

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
