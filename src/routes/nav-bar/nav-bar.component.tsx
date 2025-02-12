import { FunctionComponent } from 'react';
import { Outlet } from 'react-router';

import { LogoContainer, NavBarContainer, NavLink, NavLinksContainer } from './nav-bar.styles';
import CrwnLogo from '../../assets/crown.svg?react';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { useCart } from '../../hooks/useCart.hook';
import { useCurrentUser } from '../../hooks/useUser.hook';
import { signOutUser } from '../../utils/firebase/auth-firebase.utils';

// import './nav-bar.styles.scss';

const NavBar: FunctionComponent = () => {
  const { currentUser } = useCurrentUser();
  const { isCartOpen } = useCart();

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <NavBarContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" to="" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavBarContainer>
      <Outlet />
    </>
  );
};

export default NavBar;
