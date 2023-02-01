import React, { useContext } from 'react';
import { CartCtx } from '../../context/Cart/ctx';
import {
  addProduct,
  decreaseProductQuantity,
} from '../../context/Cart/reducer';
import { dummyProductType, ProductType } from '../../types/types';
import styles from './Card.module.scss';

const { card } = styles;

export const Card = (product: dummyProductType) => {
  const { cartState, dispatch } = useContext(CartCtx);

  const { id, title, price, quantity } = product;

  const quantityInCart = cartState.items.find(
    (item) => item.id === id
  )?.quantity;

  return (
    <div className={card} key={id}>
      <div>{title}</div>
      <div>{price}</div>
      <div>{quantity}</div>
      <button
        onClick={() => {
          dispatch(addProduct(product));
        }}
        /* disabled={quantityInCart === quantity} */
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch(decreaseProductQuantity(product));
        }}
        // disabled={quantityInCart === }
      >
        -1
      </button>
    </div>
  );
};
