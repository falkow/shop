import {
  Button,
  CardContent,
  Card,
  CardHeader,
  CardMedia,
  dividerClasses,
} from '@mui/material';
import React, { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { CartCtx } from '../../context/Cart/ctx';
import {
  addProduct,
  decreaseProductQuantity,
} from '../../context/Cart/reducer';
import { useFetch } from '../../hooks/useFetch';
import { DummyCard } from '../../types/types';
import styles from './CardDetail.module.scss';

const { card } = styles;

export const CardDetail = (/* { ...product }: DummyCard */) => {
  const { cartState, dispatch } = useContext(CartCtx);

  const { id } = useParams();
  console.log(id);
  if (id !== undefined) {
    const { products, isLoading, hasMore } = useFetch({
      id: Number.parseInt(id),
    });
    console.log(products, isLoading, hasMore);
    return (
      <div>1</div>
      // <Card className={card} key={id}>
      //   <CardHeader title={products[0].title}></CardHeader>
      //   {/* <div>{title}</div> */}
      //   {/* <div>{price}</div> */}
      //   {/* <div>{quantity}</div> */}
      //   <CardMedia
      //     component='img'
      //     image={products[0].thumbnail}
      //     sx={{ height: '150px' }}></CardMedia>
      //   {/* <Button onClick={() => dispatch(addProduct(products[0]))}>
      //   Add to Cart
      // </Button> */}
      // </Card>
    );
  }
  // console.log(products instanceof dummyProductType);
  // return <div> 1 </div>;
  // if (id !== undefined) {
  //
  // } else {
  //   return <Navigate to='/not-found' />;
  // }
  // }
  // const { id, title, price, quantity, innerRef } = product;

  // const quantityInCart = cartState.items.find(
  //   (item) => item.id === id
  // )?.quantity;
};
