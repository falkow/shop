import React, { useContext } from 'react';
import { CartCtx } from '../../context/Cart/ctx';
import { addProduct } from '../../context/Cart/reducer';
import { ProductType } from '../../types/types';
import styles from './Card.module.scss';

const { card } = styles;

export const Card = ({ id, name, price, quantity }: ProductType) => {
  const { cartState, dispatch } = useContext(CartCtx);

  const quantityInCart = cartState.items.find(
    (item) => item.id === id
  )?.quantity;

  return (
    <div className={card} key={id}>
      <div>{name}</div>
      <div>{price}</div>
      <div>{quantity}</div>
      <button
        onClick={() => {
          dispatch(addProduct({ id, name, price, quantity }));
        }}
        disabled={quantityInCart === quantity}>
        +1
      </button>
    </div>
  );
};
