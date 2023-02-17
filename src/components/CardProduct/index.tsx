import {
  Button,
  CardContent,
  Card,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import React, { useContext } from 'react';
import { CartCtx } from '../../context/Cart/CartContext';
import {
  addProduct,
  decreaseProductQuantity,
} from '../../context/Cart/reducer';
import { DummyCard } from '../../types/types';
import { currencyFormatter } from '../../utils/currencyFormatter';
import StarScore from '../StarScore';
import styles from './CardProduct.module.scss';

const { card, cardHeader, cardPrice, cardButton } = styles;

export const CardProduct = ({ ...product }: DummyCard) => {
  const { dispatch } = useContext(CartCtx);

  const { title, price, innerRef, rating } = product;

  return (
    <Card
      className={card}
      ref={innerRef}
      sx={{
        borderRadius: '12px',
        position: 'relative',
        height: '300px',
      }}>
      {/* <div>{title}</div> */}
      {/* <div>{price}</div> */}
      {/* <div>{quantity}</div> */}
      <CardMedia
        component='img'
        image={product.thumbnail}
        sx={{
          height: '140px',
          objectFit: 'cover',
        }}></CardMedia>
      <CardHeader
        className={cardHeader}
        title={title}
        sx={{ padding: '5px' }}></CardHeader>
      <StarScore rating={rating} />
      <CardContent sx={{ padding: '5px' }} className={cardPrice}>
        <Typography variant='body2'>{currencyFormatter(price)}</Typography>
        <Button
          onClick={(e) => {
            e.preventDefault();
            dispatch(addProduct(product));
          }}
          sx={{ position: 'absolute', bottom: '0', left: 'calc(50% - 64px)' }}
          className={cardButton}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};
