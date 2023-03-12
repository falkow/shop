import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import CartProvider from './context/Cart/CartProvider';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import { CardDetail } from './components/CardDetail';
import { NotFound } from './components/NotFound';
import ProductProvider from './context/Product/ProductProvider';
import './styles/global.scss';
import { Home } from './components/Home';
import ScrollToTop from './utils/ScrollToTop';
import CartPage from './pages/CartPage';
import ShopPage from './pages/ShopPage';
import HomePage from './pages/HomePage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProductProvider>
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route
            path='/shop/:id'
            element={<CardDetail />}
            errorElement={<NotFound />}
          />
          <Route path='*' element={<NotFound />} />
          {/* <Route path='/' element={<Test />} /> */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </ProductProvider>
);
