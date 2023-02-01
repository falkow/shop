import React from 'react';
import CartProvider from '../../context/Cart/CartProvider';
import { DataType } from '../../types/types';

import { Card } from '../Card';
import styles from './Cards.module.scss';

const { wrapperContainer } = styles;

const Cards = ({ products }: DataType) => {
  return (
    <CartProvider>
      <div className={wrapperContainer}>
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </CartProvider>
  );
};

export default Cards;
