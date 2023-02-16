import {
  Button,
  CardContent,
  Card,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';
import React, { useContext } from 'react';
import { CartCtx } from '../../context/Cart/CartContext';
import {
  addProduct,
  decreaseProductQuantity,
} from '../../context/Cart/reducer';
import { DummyCard } from '../../types/types';
import StarScore from '../StarScore';
import styles from './CardProduct.module.scss';

const { card, cardHeader, cardPrice, cardButton } = styles;

export const CardProduct = ({ ...product }: DummyCard) => {
  const { cartState, dispatch } = useContext(CartCtx);

  const { id, title, price, quantity, innerRef, rating } = product;

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
