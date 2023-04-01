import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartProvider from './context/Cart/CartProvider';
import { NotFound } from './components/NotFound';
import ProductProvider from './context/Product/ProductProvider';
import './styles/global.scss';
import ScrollToTop from './utils/ScrollToTop';
import CartPage from './pages/CartPage';
import ShopPage from './pages/ShopPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProductProvider>
    <CartProvider>
      <Router>
        <ScrollToTop />
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
        </Routes>
      </Router>
    </CartProvider>
  </ProductProvider>
);
