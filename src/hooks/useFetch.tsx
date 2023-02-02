import axios, { Canceler } from 'axios';

import { useEffect, useState } from 'react';
import { dummyProductType } from '../types/types';

export const useFetch = () => {
  const [products, setProducts] = useState<dummyProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let cancel: Canceler;
    async function fetchData() {
      setIsLoading(true);
      {
        await axios({
          method: 'GET',
          url: 'https://dummyjson.com/products',
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        }).then((response) => {
          // console.log(response);
          // setProducts((prev) => [
          //   // ...new Set([
          //     ...prev,
          //     ...response.data.products
          //   // ]),
          // ]);
          setProducts(response.data.products);
          setIsLoading(false);
        });
      }
    }
    fetchData();
    return () => cancel();
    // })()
  }, []);

  return { products, isLoading };
};
