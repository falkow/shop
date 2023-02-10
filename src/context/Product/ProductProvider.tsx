import axios, { Canceler } from 'axios';
import React, { useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { DummyProductType, ProductProviderType } from '../../types/types';
import { ProductCtx } from './ProductContext';

const ProductProvider = ({ children }: ProductProviderType) => {
  const [products, setProducts] = useState<DummyProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = useCallback(
    async (limit: number) => {
      let cancel: Canceler;
      const config = {
        method: 'GET',
        url: `https://dummyjson.com/products/`,
        params: { limit: limit },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      };
      setIsLoading(true);

      await axios(config)
        .then((response) => {
          setProducts(() => {
            return [...response.data.products];
          });
          if (products.length < response.data.total) setHasMore(true);
          setIsLoading(false);
        })
        .catch((err) => {
          if (axios.isCancel(err)) return;
          setError(true);
        });
      return () => cancel();
    },
    [products]
  );

  return (
    <ProductCtx.Provider
      value={{
        products,
        isLoading,
        hasMore,
        error,
        fetchData,
      }}>
      {children}
    </ProductCtx.Provider>
  );
};

export default ProductProvider;
