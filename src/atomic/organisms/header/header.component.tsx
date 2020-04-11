import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import logo from '../../../assets/images/logo-white.png';
import { IUser } from '../../../models/user.model';
import { Logout } from '../../../redux/actions/auth.actions';
import { IAppState } from '../../../redux/reducers/main.reducer';
import {
  selectAuthIsLoggedIn,
  selectAuthToken,
  selectLoggedInUser,
} from '../../../redux/selectors/auth.selectors';
import urls from '../../../urls/urls';

interface IHeaderProps {
  isLoggedIn?: boolean;
  token?: boolean;
  user?: IUser;
  logout: () => void;
}

const Header: React.FC<IHeaderProps> = ({
  isLoggedIn,
  token,
  user,
  logout,
}) => {
  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <header className='header'>
      <nav className='nav nav--tours'>
        <Link className='nav__el' to={urls.homepage}>
          All tours
        </Link>
      </nav>
      <div className='header__logo'>
        <img src={logo} alt='Natours logo' />
      </div>
      <nav className='nav nav--user'>
        {!isLoggedIn && !token && (
          <>
            <Link className='nav__el' to={urls.auth.login}>
              Log in
            </Link>
            <Link className='nav__el' to={urls.auth.register}>
              Sign up
            </Link>
          </>
        )}
        {isLoggedIn && token && (
          <>
            <button className='nav__el nav__el--logout' onClick={handleLogout}>
              Logout
            </button>
            <Link className='nav__el' to={urls.account.settings}>
              <img
                className='nav__user-img'
                src={`https://natours-kev.herokuapp.com/img/users/${user?.photo}`}
                alt={user?.name}
              />
              <span>{user?.name.split(' ')[0]}</span>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

const mapStateToProps = createStructuredSelector<IAppState, {}>({
  isLoggedIn: selectAuthIsLoggedIn,
  token: selectAuthToken,
  user: selectLoggedInUser,
});

const mapDispatchToProps = (dispatch: any) => ({
  logout: () => dispatch(Logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
