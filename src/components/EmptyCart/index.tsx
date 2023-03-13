import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EmptyCart.module.scss';

const { wrapper } = styles;

const EmptyCart = () => {
  return (
    <Container className={wrapper}>
      <Typography>Your shopping cart is empty</Typography>
      <Typography>Looking for inspiration?</Typography>
      <Link to='/'>
        {/* <Button> */}
        Go to the homepage
        {/* </Button> */}
      </Link>
    </Container>
  );
};

export default EmptyCart;
