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
      await axios(config)
        .then((response) => {
          setProducts(() => {
            return [...response.data.products];
          });
          if (products.length < response.data.total) {
            setHasMore(true);
          } else setHasMore(false);
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
