import React, { useReducer } from 'react';
import { CartProviderType, OmPrTy, ProductType } from '../../types/types';
import { ACTIONS } from './actions';
import { CartCtx, initialState } from './ctx';
import { reducer } from './reducer';

const CartProvider = ({ children }: CartProviderType) => {
  const [cartState, dispatch] = useReducer(reducer, initialState);
  const addProduct = ({ name, price, id, quantity }: ProductType) =>
    dispatch({
      type: ACTIONS.ADD,
      payload: { id, name, price, quantity },
    });

  return (
    <CartCtx.Provider value={{ cartState, addProduct }}>
      {children}
    </CartCtx.Provider>
  );
};

export default CartProvider;
