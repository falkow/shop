import React from 'react';
import styles from './ProductsInCart.module.scss';
import SingleProductInCart from '../SingleProductInCart';

const {} = styles;

const ProductsInCart = ({ items }: any) => {
  return (
    <div>
      {items.map((item: any, index: number) => (
        // <div className='ma'>{item.title}</div>
        <SingleProductInCart product={item} key={index} />
      ))}
    </div>
  );
};

export default ProductsInCart;
