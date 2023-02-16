import React, { useContext } from 'react';
import { CartCtx } from '../../context/Cart/CartContext';

import styles from './Cards.module.scss';

const { wrapper } = styles;

const Cart = () => {
  const { cartState } = useContext(CartCtx);
  return <div className={wrapper}>{cartState.price}</div>;
};

export default Cart;
