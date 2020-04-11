import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo-white.png';
import urls from '../../../urls/urls';

export const Header: React.FC<{}> = () => {
  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link className="nav__el" to={urls.homepage}>
          All tours
        </Link>
      </nav>
      <div className="header__logo">
        <img src={logo} alt="Natours logo" />
      </div>
      <nav className="nav nav--user">
        <Link className="nav__el" to={urls.auth.login}>
          Log in
        </Link>
        <Link className="nav__el" to={urls.auth.register}>
          Sign up
        </Link>
      </nav>
    </header>
  );
};
