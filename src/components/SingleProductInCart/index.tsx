import { Button, Card, CardHeader, CardMedia, Typography } from '@mui/material';
import Input from '@mui/joy/Input';
import { Container } from '@mui/system';
import { useContext } from 'react';
import Bin from '../../assets/Bin';
import { CartCtx } from '../../context/Cart/CartContext';
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProduct,
  changeProductQuantity,
} from '../../context/Cart/reducer';
import { SingleProduct } from '../../types/types';
import styles from './rwd.module.scss';

const {
  wrapper,
  wrapperLeft,
  wrapperRight,
  wrapperLeftHeader,
  wrapperContainerPrice,
  wrapperContainerQuantity,
} = styles;

const SingleProductInCart = ({ product }: SingleProduct) => {
  const { cartState, dispatch } = useContext(CartCtx);

  const { thumbnail, title, price, quantity } = product;

  return (
    <Card className={wrapper} sx={{ borderRadius: '0' }}>
      <Container className={wrapperLeft}>
        <CardMedia
          className='thumbnail'
          component='img'
          image={thumbnail}
          alt={title}
          sx={{
            height: '60px',
            width: '60px',
            objectFit: 'cover',
          }}
        />
        <CardHeader title={title} className={wrapperLeftHeader} />
      </Container>
      <Container className={wrapperRight}>
        <Typography className={wrapperContainerPrice}>{price}</Typography>
        <Input
          className={wrapperContainerQuantity}
          value={quantity}
          type='number'
          onChange={(e) => {
            if (parseInt(e.target.value) === 0) {
              dispatch(removeProduct(product));
            } else {
              dispatch(
                changeProductQuantity(parseInt(e.target.value), product)
              );
            }
          }}
          startDecorator={
            <Button onClick={() => dispatch(decreaseProductQuantity(product))}>
              -
            </Button>
          }
          endDecorator={
            <Button onClick={() => dispatch(increaseProductQuantity(product))}>
              +
            </Button>
          }
          sx={{ borderRadius: '12px', borderWidth: '0', minHeight: 'none' }}
        />
        <Button onClick={() => dispatch(removeProduct(product))}>
          <Bin />
        </Button>
      </Container>
    </Card>
  );
};

export default SingleProductInCart;
