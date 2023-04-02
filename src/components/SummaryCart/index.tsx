import { Button, Card, Container, Typography } from '@mui/material';
import { useContext } from 'react';
import { CartCtx } from '../../context/Cart/CartContext';
import { currencyFormatter } from '../../utils/currencyFormatter';

import styles from './SummaryCart.module.scss';

const { wrapper, wrapperButton, wrapperSummary, wrapperSummaryTotal } = styles;

const SummaryCart = () => {
  const { cartState } = useContext(CartCtx);

  const { price } = cartState;

  return (
    <Card className={wrapper} sx={{ borderRadius: '12px' }}>
      <Container className={wrapperSummary}>
        <Typography>Price</Typography>
        <Typography>{currencyFormatter(price)}</Typography>
      </Container>
      <Container className={wrapperSummary}>
        <Typography>Delivery charges</Typography>
        <Typography>Free</Typography>
      </Container>
      <Container className={`${wrapperSummary} ${wrapperSummaryTotal}`}>
        <Typography>Total Amount</Typography>
        <Typography>{currencyFormatter(price)}</Typography>
      </Container>
      <Button className={wrapperButton}>Checkout</Button>
    </Card>
  );
};

export default SummaryCart;
