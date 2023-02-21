import axios, { Canceler } from 'axios';

import { useEffect, useState } from 'react';
import { DummyProductType } from '../types/types';

export const useFetch = ({ limit, id }: any) => {
  const [products, setProducts] = useState<DummyProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState(0);

  useEffect(() => {
    let cancel: Canceler;

    const config =
      id === null || id === undefined
        ? {
            method: 'GET',
            url: `https://dummyjson.com/products/`,
            params: { limit: limit },
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
          }
        : {
            method: 'GET',
            url: `https://dummyjson.com/products/${id}`,
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
          };
    async function fetchData() {
      setIsLoading(true);
      {
        await axios(config)
          .then((response) => {
            if (Object.hasOwn(config, 'params')) {
              setProducts((prev) => {
                return [...prev, ...response.data.products];
              });
            } else {
              setProducts([response.data]);
            }

            if (products.length < response.data.total) setHasMore(true);
            setIsLoading(false);
          })
          .catch((err) => {
            if (axios.isCancel(err)) return;
            setError(err.response.status);
          });
      }
    }
    fetchData();
    return () => cancel();
  }, [limit, id]);

  return { products, isLoading, error, hasMore };
};
