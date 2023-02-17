import axios, { Canceler } from 'axios';
import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ProductCtx } from '../../context/Product/ProductContext';
import { BehindGreenDoor } from '../../images/BehindGreenDoor';
import ShoppingCart from '../../images/shopping_cart.svg';
import style from './Navbar.module.scss';

const { header, headerLink, headerWrapper, headerLinks } = style;

const Navbar = () => {
  // const { } = useContext(ProductCtx);
  // console.log(useLocation());
  // console.log(categories);

  useEffect(() => {
    // fetchCategories();
  }, []);

  return (
    <header className={header}>
      <div className={headerWrapper}>
        {/* <div>
          {categories.map((element) => (
            <p>{element}</p>
          ))}
        </div> */}
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
            <img src={ShoppingCart} alt='Cart' />
            {/* Cart */}
          </Link>
          {/* <Link to='/'></Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
