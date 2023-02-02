import axios, { Canceler } from 'axios';

import { useEffect, useState } from 'react';
import { dummyProductType } from '../types/types';

export const useFetch = (limit: number) => {
  const [products, setProducts] = useState<dummyProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancel: Canceler;
    async function fetchData() {
      setIsLoading(true);
      {
        await axios({
          method: 'GET',
          url: 'https://dummyjson.com/products',
          params: { limit: limit },
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
          .then((response) => {
            setProducts((prev) => {
              return [...new Set([...prev, ...response.data.products])];
            });
            if (products.length < response.data.total) setHasMore(true);
            setIsLoading(false);
          })
          .catch((err) => {
            if (axios.isCancel(err)) return;
            setError(true);
          });
      }
    }
    fetchData();
    return () => cancel();
    // })()
  }, [limit]);

  return { products, isLoading, error, hasMore };
};
