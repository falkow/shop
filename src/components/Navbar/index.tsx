import axios, { Canceler } from 'axios';
import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ProductCtx } from '../../context/Product/ProductContext';
import { BehindGreenDoor } from '../../assets/BehindGreenDoor';
// import ShoppingCart from '../../assets/shopping_cart.svg';
import ShoppingCart from '../../assets/ShoppingCart';
import style from './Navbar.module.scss';
import { CartCtx } from '../../context/Cart/CartContext';

const { header, headerLink, headerWrapper, headerLinks } = style;

const Navbar = () => {
  const { cartState } = useContext(CartCtx);

  const { items } = cartState;
  const itemsInCart = items.length;

  return (
    <header className={header}>
      <div className={headerWrapper}>
        <Link to='/'>
          <BehindGreenDoor />
        </Link>
        <nav className={headerLinks}>
          <Link to='/' className={headerLink}>
            Home
          </Link>
          <Link to='/shop' className={headerLink}>
            Shop
          </Link>
          <Link to='/cart' className={headerLink}>
            <ShoppingCart />
            <p>{itemsInCart ? `(${itemsInCart})` : ''}</p>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
