import React from 'react';
import { DummyProductType, IProductCtx } from '../../types/types';

const fetchDataDummy = async () => {
  return () => {};
};

const initialState: DummyProductType[] = [];
const ProductCtx = React.createContext<IProductCtx>({
  products: { ...initialState },
  isLoading: false,
  hasMore: false,
  error: false,
  fetchData: fetchDataDummy,
});

export { ProductCtx, initialState };
