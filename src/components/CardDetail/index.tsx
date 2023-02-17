import {
  Button,
  CardContent,
  Card,
  CardHeader,
  CardMedia,
} from '@mui/material';
import { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { ProductCtx } from '../../context/Product/ProductContext';
import { useKeenSlider } from 'keen-slider/react';
import styles from './CardDetail.module.scss';
import 'keen-slider/keen-slider.min.css';
import { useSlider } from '../../hooks/useSlider';
import StarScore from '../StarScore';
import { CartCtx } from '../../context/Cart/CartContext';
import { addProduct } from '../../context/Cart/reducer';
import { currencyFormatter } from '../../utils/currencyFormatter';

const { wrapper, wrapperContent, wrapperContentSliders, wrapperContentSide } =
  styles;

export const CardDetail = () => {
  const { id } = useParams();
  const { dispatch } = useContext(CartCtx);
  const { products, isLoading } = useContext(ProductCtx);
  const { sliderRef, thumbnailRef } = useSlider();
  if (id !== undefined) {
    const product = products[Number.parseInt(id)];
    const { title, rating, images, description, price } = product;
    console.log(products[Number.parseInt(id)]);
    return (
      <div className={wrapper}>
        {products.length > 0 && (
          <Card>
            <div className={wrapperContent}>
              <div className={wrapperContentSliders}>
                <div className='keen-slider' ref={sliderRef}>
                  {images.map((image, index) => (
                    <div
                      className={`keen-slider__slide number-slide${index + 1}`}
                      key={index}>
                      <img src={image} alt='' />
                    </div>
                  ))}
                </div>
                <div
                  className='keen-slider thumbnail wrapperThumb'
                  ref={thumbnailRef}>
                  {images.map((image, index) => (
                    <div
                      className={`keen-slider__slide number-slide${
                        index + 1
                      } thumbnail`}
                      key={index}>
                      <img src={image} alt='' />
                    </div>
                  ))}
                </div>
              </div>
              <div className={wrapperContentSide}>
                <CardHeader title={title}></CardHeader>
                <StarScore rating={rating} />
                <p>{description}</p>
                <p>{currencyFormatter(price)}</p>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(addProduct(product));
                  }}>
                  Add to cart
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    );
  } else {
    return <Navigate to='/not-found' />;
  }
};
