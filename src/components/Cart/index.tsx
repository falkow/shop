import React, { useContext } from 'react';
import { CartCtx } from '../../context/Cart/CartContext';

import styles from './Cards.module.scss';

const {} = styles;

const Cart = () => {
  const { cartState } = useContext(CartCtx);
  return <p>{cartState.price}</p>;
};

export default Cart;
