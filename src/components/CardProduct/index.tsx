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
import styles from './CardProduct.module.scss';

const { card } = styles;

export const CardProduct = ({ ...product }: DummyCard) => {
  const { cartState, dispatch } = useContext(CartCtx);

  const { id, title, price, quantity, innerRef } = product;

  const quantityInCart = cartState.items.find(
    (item) => item.id === id
  )?.quantity;

  const currencyFormatter = (number: number) => {
    const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
      currency: 'PLN',
      style: 'currency',
    });
    return CURRENCY_FORMATTER.format(number);
  };

  return (
    <Card className={card} key={id} ref={innerRef} sx={{ height: '300px' }}>
      {/* <div>{title}</div> */}
      {/* <div>{price}</div> */}
      {/* <div>{quantity}</div> */}
      <CardMedia
        component='img'
        image={product.thumbnail}
        sx={{ height: '140px', objectFit: 'cover' }}></CardMedia>
      <CardHeader title={title} sx={{ padding: '5px' }}></CardHeader>
      <CardContent sx={{ padding: '5px' }}>
        <Typography variant='body2'>{currencyFormatter(price)}</Typography>
      </CardContent>

      <Button onClick={() => dispatch(addProduct(product))}>Add to Cart</Button>
    </Card>
  );
};
