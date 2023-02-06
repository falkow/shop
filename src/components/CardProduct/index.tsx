import {
  Button,
  CardContent,
  Card,
  CardHeader,
  CardMedia,
} from '@mui/material';
import React, { useContext } from 'react';
import { CartCtx } from '../../context/Cart/ctx';
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

  return (
    <Card className={card} key={id} ref={innerRef}>
      <CardHeader title={title}></CardHeader>
      {/* <div>{title}</div> */}
      {/* <div>{price}</div> */}
      {/* <div>{quantity}</div> */}
      <CardMedia
        component='img'
        image={product.thumbnail}
        sx={{ height: '150px' }}></CardMedia>
      <Button onClick={() => dispatch(addProduct(product))}>Add to Cart</Button>
    </Card>
  );
};
