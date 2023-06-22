import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './EmptyCart.module.scss';

const { wrapper } = styles;

const EmptyCart = () => {
  return (
    <Container className={wrapper}>
      <Typography>Your shopping cart is empty</Typography>
      <Typography>Looking for inspiration?</Typography>
      <Button component={Link} to="/shop">
        Go to Shop
      </Button>
    </Container>
  );
};

export default EmptyCart;
