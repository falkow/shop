import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import scarecrow from '../../assets/Scarecrow.png';
import styles from './rwd.module.scss';

const {
  wrapper,
  wrapperHeader,
  wrapperMain,
  wrapperMainScarecrow,
  wrapperMainInform,
} = styles;

export const NotFound = () => {
  return (
    <div className={wrapper}>
      <div className={wrapperHeader}>
        <h1>404 not found</h1>
      </div>
      <section className={wrapperMain}>
        <div className={wrapperMainScarecrow}>
          <img src={scarecrow} alt='Scarecrow' />
        </div>
        <div className={wrapperMainInform}>
          <h2>I have bad news for you</h2>
          <span>
            The page you are looking for might be removed or is temporarily
            unavailable
          </span>
          <Link to='/'>back to homepage</Link>
        </div>
      </section>
    </div>
  );
};
