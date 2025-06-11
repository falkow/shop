import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductCtx } from '../../context/Product/ProductContext';
import { CardProduct } from '../CardProduct';
import { Alert, Backdrop, CircularProgress } from '@mui/material';
import styles from './Cards.module.scss';

const { wrapper, wrapperLink, errShown } = styles;

const Cards = () => {
  const [limit, setLimit] = useState(10);

  const { products, error, isLoading, hasMore, fetchData } =
    useContext(ProductCtx);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastProduct = useCallback(
    (node: Element) => {
      if (isLoading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setLimit((prev) => prev + 10);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, hasMore]
  );

  useEffect(() => {
    fetchData(limit);
  }, [limit]);

  return (
    <div className={wrapper}>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}>
        <CircularProgress color='inherit' />
      </Backdrop>
      {error ? (
        <Alert severity='warning' className={errShown}>
          Something went wrong! Check our store in 5 minutes!
        </Alert>
      ) : (
        products.map((product, index) => {
          if (products.length === index + 1) {
            return (
              <Link to={`${index}`} key={product.id} className={wrapperLink}>
                <CardProduct {...product} innerRef={lastProduct} />
              </Link>
            );
          } else {
            return (
              <Link to={`${index}`} key={product.id} className={wrapperLink}>
                <CardProduct {...product} />
              </Link>
            );
          }
        })
      )}
    </div>
  );
};

export default Cards;
