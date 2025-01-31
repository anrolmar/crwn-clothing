import { Fragment, FunctionComponent } from 'react';
import { Outlet, Link } from 'react-router';

import CrwnLogo from '../../assets/crown.svg?react';
import { useCurrentUser } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './nav-bar.styles.scss';

const NavBar: FunctionComponent = () => {
  const { currentUser } = useCurrentUser();

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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
