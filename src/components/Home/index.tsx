import style from './Home.module.scss';
import mountain from '../../assets/mountain.jpg';
import mountain1 from '../../assets/mountain1.jpg';
import mountain2 from '../../assets/mountain2.jpg';
import Typewriter from 'typewriter-effect';
import { Container } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const {
  wrapper,
  wrapperContent,
  wrapperContentLeftParagraph,
  wrapperContentLeft,
  wrapperContentRight,
} = style;

const headers = ['Expensive.', 'Long', 'Poor Quality'];

export const Home = () => {
  return (
    <div className={wrapper}>
      <div className={wrapperContent}>
        <Container className={wrapperContentLeft}>
          <h1>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                strings: ['Expensive', 'Long delivery', 'Poor Quality'],
              }}
            />
          </h1>
          <Typography className={wrapperContentLeftParagraph}>
            Welcome to our one-of-a-kind online store, where we offer everything
            and nothing at the same time! Our mission is to provide you with the
            highest quality products that are completely unique and unavailable
            anywhere else. Our inventory includes everything from A to Z, from
            apricots to zippers, and if you can't find something you didn't even
            know you needed - it simply doesn't exist! We create our own
            products that you won't find in any other store, ranging from
            gingerbread rockets to patches of imagination and mugs with infinite
            possibilities.
          </Typography>
          {/* <Typography className={wrapperContentLeftParagraph}>
            Don't be fooled by appearances! Although our offer seems completely
            random and accidental, it is actually the result of dozens of hours
            of work and unimaginable effort of our research team. We always
            strive to ensure that our customers receive the best products that
            are so unique and special that you won't find them anywhere else.
            Visit our store and see what wonders await you!
          </Typography> */}
          <Link to='/shop'>Go to Shop</Link>
        </Container>
        <Container className={wrapperContentRight}>
          <img src={mountain1} alt='backorund' />
        </Container>
      </div>
    </div>
  );
};
