import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useContext } from 'react';
import { CartCtx } from '../../context/Cart/CartContext';
import ProductsInCart from '../ProductsInCart';
import SummaryCart from '../SummaryCart';

// import styles from './rwd.module.scss';
import styles from './rwd.module.scss';

const { wrapper, wrapperProducts, wrapperProductsSummary } = styles;

// type CartType = {
//   items: DummyProductType[];
//   price: number;
// };
// cartState: CartType;
const Cart = () => {
  const { cartState } = useContext(CartCtx);
  const { items, price } = cartState;
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
        <div>empty</div>
      )}
    </div>
  );
};

export default Cart;
