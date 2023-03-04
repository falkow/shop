import React, { useContext } from 'react';
import { CartCtx } from '../../context/Cart/CartContext';
import ProductsInCart from '../ProductsInCart';

import styles from './Cards.module.scss';

const { wrapper } = styles;

// type CartType = {
//   items: DummyProductType[];
//   price: number;
// };
// cartState: CartType;
const Cart = () => {
  const { cartState } = useContext(CartCtx);
  const { items, price } = cartState;
  console.log(cartState);
  return (
    <div className={wrapper}>
      {items.length > 0 && <ProductsInCart items={items} />}
    </div>
  );
};

export default Cart;
