import { Button, Card, CardHeader, CardMedia, Typography } from '@mui/material';
import { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { ProductCtx } from '../../context/Product/ProductContext';
import styles from './rwd.module.scss';
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
  wrapperContentSlidersUpper,
  wrapperContentSlidersUpperImage,
  wrapperContentSlidersThumbnails,
  wrapperThumb,
  wrapperThumbNail,
  wrapperThumbImage,
  wrapperContentSideDescription,
  wrapperContentSideHeaderStars,
  wrapperContentSideButton,
  wrapperContentSideCurrency,
} = styles;

export const CardDetail = () => {
  const { id } = useParams();
  const { dispatch } = useContext(CartCtx);
  const { products } = useContext(ProductCtx);
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
            <Card className={wrapperContentSliders}>
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
                  <Card
                    className={`keen-slider__slide number-slide${
                      index + 1
                    } ${wrapperContentSlidersUpperImage}`}
                    key={index}
                    sx={{ boxShadow: 'none' }}>
                    <CardMedia component='img' image={image} />
                  </Card>
                ))}
              </div>
              <div
                className={`keen-slider thumbnail ${wrapperContentSlidersThumbnails}`}
                ref={thumbnailRef}>
                {images.map((image, index) => {
                  return (
                    <Card
                      className={`keen-slider__slide number-slide${
                        index + 1
                      } ${wrapperThumb}`}
                      key={index}>
                      <CardMedia
                        component='img'
                        image={image}
                        className={wrapperThumbImage}
                      />
                      {currentSlider === index && (
                        <div className={wrapperThumbNail}></div>
                      )}
                    </Card>
                  );
                })}
              </div>
            </Card>

            <Card className={wrapperContentSide}>
              <CardHeader className={wrapperContentSideHeader} title={title} />
              <div className={wrapperContentSideHeaderStars}>
                <StarScore rating={rating} />
              </div>
              <Typography className={wrapperContentSideDescription}>
                {description}
              </Typography>
              <Typography className={wrapperContentSideCurrency}>
                {currencyFormatter(price)}
              </Typography>
              <Button
                className={wrapperContentSideButton}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(addProduct(product));
                }}>
                Add to cart
              </Button>
            </Card>
          </div>
        )}
      </div>
    );
  } else {
    return <Navigate to='/not-found' />;
  }
};
