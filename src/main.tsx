import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import CartProvider from './context/Cart/CartProvider';
import Navbar from './components/Navbar';
import { Test } from './components/Test';
import Cards from './components/Cards';
import { CardProduct } from './components/CardProduct';
import { CardDetail } from './components/CardDetail';
import { NotFound } from './components/NotFound';
import ProductProvider from './context/Product/ProductProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProductProvider>
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/cart' element={<Cart />} />
          <Route
            path='/books/:id'
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
