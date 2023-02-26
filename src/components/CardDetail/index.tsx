import {
  Button,
  CardContent,
  Card,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { ProductCtx } from '../../context/Product/ProductContext';
import styles from './CardDetail.module.scss';
import 'keen-slider/keen-slider.min.css';
import { useSlider } from '../../hooks/useSlider';
import StarScore from '../StarScore';
import { CartCtx } from '../../context/Cart/CartContext';
import { addProduct } from '../../context/Cart/reducer';
import { currencyFormatter } from '../../utils/currencyFormatter';
import { ModalArrowSVG } from '../../assets/ModalArrowSVG';

const {
  wrapper,
  wrapperContent,
  wrapperContentSliders,
  wrapperContentSide,
  wrapperContentSideHeader,
  wrapperContentArrows,
  wrapperContentArrowsLeft,
  wrapperContentArrowsRight,
  wrapperContentImage,
  wrapperContentSlidersUpper,
  wrapperThumb,
  wrapperThumbNail,
  wrapperThumbnails,
  wrapperThumbImage,
  wrapperContentRating,
  wrapperContentSideDescription,
  wrapperContentSideHeaderStars,
  wrapperContentSideButton,
  wrapperContentSideCurrency,
} = styles;

export const CardDetail = () => {
  const { id } = useParams();
  const { dispatch } = useContext(CartCtx);
  const { products, isLoading } = useContext(ProductCtx);
  if (id !== undefined) {
    const {
      sliderRef,
      thumbnailRef,
      handleSlideNext,
      handleSlidePrev,
      currentSlider,
    } = useSlider();

    const product = products[Number.parseInt(id)];
    const { title, rating, images, description, price } = product;
    return (
      <div className={wrapper}>
        {products.length > 0 && (
          <div className={wrapperContent}>
            <div className={wrapperContentSliders}>
              <div
                className={`keen-slider ${wrapperContentSlidersUpper}`}
                ref={sliderRef}>
                <div className={wrapperContentArrows}>
                  <a
                    className={wrapperContentArrowsLeft}
                    onClick={handleSlidePrev}>
                    <ModalArrowSVG />
                  </a>
                  <a
                    className={wrapperContentArrowsRight}
                    onClick={handleSlideNext}>
                    <ModalArrowSVG />
                  </a>
                </div>

                {images.map((image, index) => (
                  <div
                    className={`keen-slider__slide number-slide${
                      index + 1
                    } ${wrapperContentImage}`}
                    key={index}>
                    <img src={image} alt='' />
                  </div>
                ))}
              </div>
              <div
                className={`keen-slider thumbnail ${wrapperThumbnails}`}
                ref={thumbnailRef}>
                {images.map((image, index) => {
                  // console.log(currentSlider === index);/
                  return (
                    <div
                      className={`keen-slider__slide number-slide${
                        index + 1
                      } ${wrapperThumb}`}
                      key={index}>
                      <img src={image} className={wrapperThumbImage} alt='' />
                      {currentSlider === index && (
                        <div className={wrapperThumbNail}></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={wrapperContentSide}>
              <h1 className={wrapperContentSideHeader}>{title}</h1>
              <div className={wrapperContentSideHeaderStars}>
                <StarScore rating={rating} />
              </div>
              <p className={wrapperContentSideDescription}>{description}</p>
              <p className={wrapperContentSideCurrency}>
                {currencyFormatter(price)}
              </p>
              <button
                className={wrapperContentSideButton}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(addProduct(product));
                }}>
                Add to cart
              </button>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return <Navigate to='/not-found' />;
  }
};
