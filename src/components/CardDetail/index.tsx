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

export const CardDetail = () => {
  const { id } = useParams();
  const { products, isLoading, hasMore, fetchData } = useContext(ProductCtx);

  if (id !== undefined) {
    return (
      <div>
        {products.length > 0 && (
          <Card key={id}>
            <CardHeader
              title={products[Number.parseInt(id)].title}></CardHeader>
            <CardMedia
              component='img'
              image={products[Number.parseInt(id)].thumbnail}
              sx={{ height: '150px' }}></CardMedia>
          </Card>
        )}
      </div>
    );
  } else {
    return <Navigate to='/not-found' />;
  }
};
