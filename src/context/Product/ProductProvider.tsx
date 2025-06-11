import axios, { Canceler } from 'axios';
import React, { useCallback, useState } from 'react';
import { DummyProductType, ProductProviderType } from '../../types/types';
import { ProductCtx } from './ProductContext';

const ProductProvider = ({ children }: ProductProviderType) => {
  const [products, setProducts] = useState<DummyProductType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState(false);

  const fetchCategories = useCallback(async () => {
    let cancel: Canceler;
    const config = {
      method: 'GET',
      url: `https://dummyjson.com/products/categories/`,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    };

    await axios(config)
      .then((response) => {
        setCategories(() => {
          return [...response.data];
        });
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
      });
    return () => cancel();
  }, []);

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
      try {
        const test = await axios(config);
        setProducts(() => {
          return [...test.data.products];
        });
        if (products.length < test.data.total) {
          setHasMore(true);
        } else setHasMore(false);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(true);
        if (axios.isAxiosError(error)) {
          console.error('Axios error:', error.message, error.response);
        } else {
          console.error('Unexpected error:', error);
        }
      }
      return () => cancel();
    },
    [products]
  );

  const contextValue = React.useMemo(
    () => ({
      products,
      isLoading,
      hasMore,
      error,
      fetchData,
    }),
    [products, isLoading, hasMore, error, fetchData]
  );

  return (
    <ProductCtx.Provider value={contextValue}>{children}</ProductCtx.Provider>
  );
};

export default ProductProvider;
