import React from 'react';
import CartProvider from '../../context/Cart/CartProvider';

import * as data from '../../data/data.json';
import { Card } from '../Card';
import * as S from './styles';

const Cards = () => {
  return (
    <CartProvider>
      <S.CardContainer>
        {data.items.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </S.CardContainer>
    </CartProvider>
  );
};

export default Cards;
