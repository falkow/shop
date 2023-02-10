import React, { useReducer } from 'react';
import { CartProviderType } from '../../types/types';
import { CartCtx, initialState } from './CartContext';
import { reducer } from './reducer';

const CartProvider = ({ children }: CartProviderType) => {
  const [cartState, dispatch] = useReducer(reducer, initialState);

  return (
    <CartCtx.Provider value={{ cartState, dispatch }}>
      {children}
    </CartCtx.Provider>
  );
};

export default CartProvider;
