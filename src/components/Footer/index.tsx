import { BehindGreenDoor } from '../../assets/BehindGreenDoor';
import { Link } from '@mui/material';
import FacebookSVG from '../../assets/Facebook';
import InstagramSVG from '../../assets/InstagramSVG';
import YoutubeSVG from '../../assets/YoutubeSVG';

import style from './rwd.module.scss';

// const { wrapper, wrapperLogo, wrapperMedia, wrapperMediaSVG, wrapperLinks } =
// styles;

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerWrapper}>
        <div className={style.footerWrapperLogo}>
          <BehindGreenDoor />
        </div>

        <div className={style.footerWrapperLinks}>
          <Link href='/'>Home</Link>
          <Link href='/shop'>Shop</Link>
          <Link href='#'>Contact</Link>
          <Link href='#'>Regulations</Link>
        </div>
        <div className={style.footerWrapperMedia}>
          <p>FOLLOW US</p>
          <div className={style.footerWrapperMediaSVG}>
            <FacebookSVG />
            <InstagramSVG />
            <YoutubeSVG />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
