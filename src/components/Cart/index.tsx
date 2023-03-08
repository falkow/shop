import React, { useContext } from 'react';
import { CartCtx } from '../../context/Cart/CartContext';
import ProductsInCart from '../ProductsInCart';
import SummaryCart from '../SummaryCart';

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
  return (
    <div className={wrapper}>
      {items.length > 0 ? (
        <>
          <ProductsInCart {...cartState} />
          <SummaryCart />
        </>
      ) : (
        <div>empty</div>
      )}
    </div>
  );
};

export default Cart;
