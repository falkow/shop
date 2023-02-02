import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import CartProvider from './context/Cart/CartProvider';
import Navbar from './components/Navbar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
);
