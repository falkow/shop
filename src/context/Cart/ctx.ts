import React from 'react';
import { CartType, ICartCtx } from '../../types/types';

const initialState: CartType = {
  items: [],
  price: 0,
};
const CartCtx = React.createContext<ICartCtx>({
  cartState: { ...initialState },
  dispatch: () => null,
});

export { CartCtx, initialState };
