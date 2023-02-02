import React, { useContext } from 'react';
import { CartCtx } from '../../context/Cart/ctx';
import {
  addProduct,
  decreaseProductQuantity,
} from '../../context/Cart/reducer';
import { dummyProductType, ProductType } from '../../types/types';
import styles from './Card.module.scss';

const { card } = styles;

type DummyCard = dummyProductType & { innerRef?: any };

export const Card = ({ ...product }: DummyCard) => {
  const { cartState, dispatch } = useContext(CartCtx);

  const { id, title, price, quantity, innerRef } = product;

  const quantityInCart = cartState.items.find(
    (item) => item.id === id
  )?.quantity;

  return (
    <div className={card} key={id} ref={innerRef}>
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
