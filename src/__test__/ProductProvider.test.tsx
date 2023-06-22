import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { ProductCtx } from '../context/Product/ProductContext';
// import { vi } from 'vitest';
import { test, vi, describe, expect } from 'vitest';

const TestComponent = () => {
  const { fetchData } = useContext(ProductCtx);

  return (
    <div>
      <button onClick={() => fetchData(10)}>Fetch Data</button>
    </div>
  );
};

describe('TestComponent which is using fetchData from Product Provider', () => {
  test('should fetch data when button is clicked', async () => {
    const mockFetchData = vi.fn();

    vi.spyOn(React, 'useContext').mockImplementation(() => ({
      fetchData: mockFetchData,
    }));

    const { getByRole } = render(
      <ProductCtx.Provider
        value={{
          fetchData: mockFetchData,
          error: false,
          hasMore: false,
          isLoading: false,
          products: [],
        }}
      >
        <TestComponent />
      </ProductCtx.Provider>
    );

    const button = getByRole('button');
    button.click();

    expect(mockFetchData).toHaveBeenCalledWith(10);
  });
});
