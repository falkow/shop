import { dividerClasses } from '@mui/material';
import React, { useCallback, useRef, useState } from 'react';
import CartProvider from '../../context/Cart/CartProvider';
import { useFetch } from '../../hooks/useFetch';
import { DataType } from '../../types/types';

import { Card } from '../Card';
import styles from './Cards.module.scss';

const { wrapperContainer } = styles;

const Cards = () => {
  const [limit, setLimit] = useState(10);
  const { products, isLoading, hasMore } = useFetch(limit);
  console.log(hasMore);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastProduct = useCallback(
    (node: any) => {
      if (isLoading) {
        console.log('test');
        return;
      }
      if (observer.current) {
        console.log('test2');
        observer.current.disconnect();
      }
      console.log(observer.current);
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log('visible');
          setLimit((prev) => prev + 10);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  return (
    <div className={wrapperContainer}>
      {products.map((product, index) => {
        if (products.length === index + 1) {
          return (
            <Card
              key={`${index} ${product.title}`}
              {...product}
              innerRef={lastProduct}
            />
          );
        } else {
          return <Card key={`${index} ${product.title}`} {...product} />;
        }
      })}
    </div>
  );
};

export default Cards;
