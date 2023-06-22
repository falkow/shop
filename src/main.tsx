import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartProvider from './context/Cart/CartProvider';
import ProductProvider from './context/Product/ProductProvider';
import ScrollToTop from './utils/ScrollToTop';
import { CartPage, HomePage, NotFound, ProductPage, ShopPage } from './pages';

import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProductProvider>
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          {/* <Route path='shop' element={<ShopPage />}> */}
          <Route path="shop">
            <Route index element={<ShopPage />} />
            <Route
              path=":id"
              element={<ProductPage />}
              errorElement={<NotFound />}
            />
          </Route>
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CartProvider>
  </ProductProvider>
);
