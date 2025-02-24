import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';

import { LogoContainer, NavBarContainer, NavLink, NavLinksContainer } from './nav-bar.styles';
import CrwnLogo from '../../assets/crown.svg?react';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';

const NavBar: FunctionComponent = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutHandler = () => dispatch(signOutStart());

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
