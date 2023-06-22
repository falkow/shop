import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BehindGreenDoor } from '../../assets/BehindGreenDoor';
import ShoppingCart from '../../assets/ShoppingCart';
import { CartCtx } from '../../context/Cart/CartContext';

import style from './Navbar.module.scss';

const Navbar = () => {
  const { cartState } = useContext(CartCtx);

  const { items } = cartState;
  const itemsInCart = items.length;

  return (
    <header className={style.header}>
      <div className={style.headerWrapper}>
        <Link to="/">
          <BehindGreenDoor />
        </Link>
        <nav className={style.headerLinks}>
          <Link to="/" className={style.headerLink}>
            Home
          </Link>
          <Link to="/shop" className={style.headerLink}>
            Shop
          </Link>
          <Link to="/cart" className={style.headerLink}>
            <ShoppingCart />
            <p>{itemsInCart ? `(${itemsInCart})` : ''}</p>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
