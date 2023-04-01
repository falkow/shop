import styles from './ProductsInCart.module.scss';
import SingleProductInCart from '../SingleProductInCart';
import { CartType, DummyProductType } from '../../types/types';
import { Card } from '@mui/material';

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
