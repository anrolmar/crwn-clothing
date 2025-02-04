import { Fragment, FunctionComponent } from 'react';
import { Outlet, Link } from 'react-router';

import CrwnLogo from '../../assets/crown.svg?react';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { useCart } from '../../hooks/useCart.hook';
import { useCurrentUser } from '../../hooks/useUser.hook';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './nav-bar.styles.scss';

const NavBar: FunctionComponent = () => {
  const { currentUser } = useCurrentUser();
  const { isCartOpen } = useCart();

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <div className="nav-bar">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
