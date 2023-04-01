import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../utils/ScrollToTop';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import CartPage from '../pages/CartPage';
import ProductPage from '../pages/ProductPage';
import { NotFound } from './NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route
          path='/shop/:id'
          element={<ProductPage />}
          errorElement={<NotFound />}
        />
        <Route path='*' element={<NotFound />} />
        {/* <Route path='/' element={<Test />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
