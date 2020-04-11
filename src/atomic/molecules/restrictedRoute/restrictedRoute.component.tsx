import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { IUser } from '../../../models/user.model';
import { IAppState } from '../../../redux/reducers/main.reducer';
import {
  selectAuthIsLoggedIn,
  selectAuthToken,
  selectLoggedInUser,
} from '../../../redux/selectors/auth.selectors';
import urls from '../../../urls/urls';

interface IRouteProps {
  path: string;
  component: any;
  restrictTo: string;
  user?: IUser;
  isLoggedIn?: boolean;
  token?: string;
}

const RestrictedRoute: React.FC<IRouteProps> = ({
  path,
  component,
  isLoggedIn,
  token,
  restrictTo,
  user,
}) => {
  if (isLoggedIn && token && restrictTo === user?.role) {
    return <Route exact path={path} component={component} />;
  } else {
    return <Redirect to={urls.auth.login} />;
  }
};

const mapStateToProps = createStructuredSelector<IAppState, {}>({
  isLoggedIn: selectAuthIsLoggedIn,
  token: selectAuthToken,
  user: selectLoggedInUser,
});

export default connect(mapStateToProps)(RestrictedRoute);
