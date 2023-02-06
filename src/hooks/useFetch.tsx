import axios, { Canceler } from 'axios';

import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { dummyProductType } from '../types/types';

export const useFetch = ({ limit, id }: any) => {
  const [products, setProducts] = useState<dummyProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState(false);

  // let url =
  //   id === null || id === undefined
  //     ? `https://dummyjson.com/products/`
  //     : `https://dummyjson.com/products/${id}`;

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
            console.log(response);
            if (Object.hasOwn(config, 'params')) {
              setProducts((prev) => {
                return [...prev, ...response.data.products];
              });
            } else {
              console.log(response.data);
              setProducts({ ...response.data });
            }
            /* return [...new Set([...prev, ...response.data.products])];
            }); */
            if (products.length < response.data.total) setHasMore(true);
            setIsLoading(false);
          })
          .catch((err) => {
            // const { response } = err.response.data
            // if(response.statusText===404) Navigate('/errorpage')
            if (axios.isCancel(err)) return;
            setError(true);
          });
      }
    }
    fetchData();
    return () => cancel();
    // })()
  }, [limit, id]);

  return { products, isLoading, error, hasMore };
};
