import { Fragment, FunctionComponent } from 'react';
import { Outlet, Link } from 'react-router';

import CrwnLogo from '../../assets/crown.svg?react';

import './nav-bar.styles.scss';

const NavBar: FunctionComponent = () => {
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
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
