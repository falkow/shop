import React from 'react';
import CartProvider from '../../context/Cart/CartProvider';

import * as data from '../../data/data.json';
import { Card } from '../Card';
import styles from './Cards.module.scss';

const { wrapperContainer } = styles;

const Cards = () => {
  return (
    <CartProvider>
      <div className={wrapperContainer}>
        {data.items.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>
    </CartProvider>
  );
};

export default Cards;
