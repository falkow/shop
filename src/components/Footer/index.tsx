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

const { wrapper } = styles;

const Footer = () => {
  return (
    <footer className={wrapper}>
      <FacebookSVG />
      <InstagramSVG />
      <BehindGreenDoor />
      {/* <FontAwesomeIcon icon={`fab fa-facebook`} /> */}
      {/* <FontAwesomeIcon icon='fab fa-facebook' /> */}
    </footer>
  );
};

export default Footer;
