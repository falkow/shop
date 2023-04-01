import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useContext } from 'react';
import { CartCtx } from '../../context/Cart/CartContext';
import EmptyCart from '../EmptyCart';
import ProductsInCart from '../ProductsInCart';
import SummaryCart from '../SummaryCart';

import styles from './rwd.module.scss';

const { wrapper, wrapperProducts, wrapperProductsSummary } = styles;

const Cart = () => {
  const { cartState } = useContext(CartCtx);
  const { items } = cartState;
  return (
    <div className={wrapper}>
      {items.length > 0 ? (
        <>
          <Container className={wrapperProducts}>
            <Typography className={wrapperProductsSummary}>
              Shopping Cart ({items.length})
            </Typography>
            <ProductsInCart {...cartState} />
          </Container>
          <SummaryCart />
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
