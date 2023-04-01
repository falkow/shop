import style from './rwd.module.scss';
import mountain1 from '../../assets/mountain1.jpg';
import Typewriter from 'typewriter-effect';
import { Container } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const { wrapper, wrapperLeftParagraph, wrapperLeft, wrapperRight } = style;

export const HeroHome = () => {
  return (
    <div className={wrapper}>
      <Container className={wrapperLeft}>
        <h1>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              strings: ['Expensive', 'Long delivery', 'Poor Quality'],
            }}
          />
        </h1>
        <Typography className={wrapperLeftParagraph}>
          Welcome to our one-of-a-kind online store, where we offer everything
          and nothing at the same time! Our mission is to provide you with the
          highest quality products that are completely unique and unavailable
          anywhere else. Our inventory includes everything from A to Z, from
          apricots to zippers, and if you can't find something you didn't even
          know you needed - it simply doesn't exist! We create our own products
          that you won't find in any other store, ranging from gingerbread
          rockets to patches of imagination and mugs with infinite
          possibilities.
        </Typography>
        <Button component={Link} to='/shop'>
          Go to Shop
        </Button>
      </Container>
      <Container className={wrapperRight}>
        <img src={mountain1} alt='backorund' />
      </Container>
    </div>
  );
};
