import { Card } from '@mui/material';
import SingleProductInCart from '../SingleProductInCart';
import { CartType, DummyProductType } from '../../types/types';

import styles from './ProductsInCart.module.scss';

const { wrapper } = styles;

const ProductsInCart = ({ items }: CartType) => {
  return (
    <Card sx={{ borderRadius: '12px' }} className={wrapper}>
      {items.map((item: DummyProductType, index: number) => (
        <SingleProductInCart product={item} key={index} />
      ))}
    </Card>
  );
};

export default ProductsInCart;
