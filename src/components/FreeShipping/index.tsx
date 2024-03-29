import { Container, Typography } from '@mui/material';
import freeShipping from '../../assets/freeShipping.jpg';
import style from './rwd.module.scss';

// const { wrapper, wrapperLeft, wrapperRigth } = styles;

const FreeShipping = () => {
  return (
    <Container className={style.wrapper}>
      <Container className={style.wrapperLeft}>
        <img src={freeShipping} alt="Free shipping" />
      </Container>
      <Container className={style.wrapperRigth}>
        <h2>Free Shipping</h2>
        <Typography>
          Are you tired of paying for shipping? Well, fear not my friend! We
          offer free shipping, but only if you're willing to spend an exorbitant
          amount of money on our products. It's like paying for shipping, but
          with a fancier name. So come on, indulge in our overpriced items and
          enjoy the illusion of free shipping!
        </Typography>
      </Container>
    </Container>
  );
};

export default FreeShipping;
