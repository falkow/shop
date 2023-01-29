import React from 'react';
import { CartType, ICartCtx } from '../../types/types';

const initialState: CartType = {
  items: [],
  price: 0,
};
const CartCtx = React.createContext<ICartCtx>({
  cartState: { ...initialState },
  addProduct: () => null,
});

export { CartCtx, initialState };
