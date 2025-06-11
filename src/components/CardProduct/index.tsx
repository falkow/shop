import {
  Button,
  CardContent,
  Card,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import { useContext } from 'react';
import { CartCtx } from '../../context/Cart/CartContext';
import { addProduct } from '../../context/Cart/reducer';
import { DummyCard } from '../../types/types';
import { currencyFormatter } from '../../utils/currencyFormatter';
import StarScore from '../StarScore';
import styles from './CardProduct.module.scss';

const { card, cardHeader, cardPrice, cardProduct } = styles;

export const CardProduct = ({ ...product }: DummyCard) => {
  const { dispatch } = useContext(CartCtx);

  const { title, price, innerRef, rating } = product;

  return (
    <Card className={card} ref={innerRef}>
      <CardMedia
        component='img'
        alt={title}
        image={product.thumbnail}
        sx={{
          height: '140px',
          objectFit: 'cover',
        }}
      />
      <CardHeader className={cardHeader} title={title} />
      <StarScore rating={rating} />
      <CardContent className={cardPrice}>
        <Typography variant='body2'>{currencyFormatter(price)}</Typography>
        <Button
          onClick={(e) => {
            e.preventDefault();
            dispatch(addProduct(product));
          }}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};
