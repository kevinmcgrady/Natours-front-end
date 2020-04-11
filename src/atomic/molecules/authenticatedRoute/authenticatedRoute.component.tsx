import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { IAppState } from '../../../redux/reducers/main.reducer';
import {
  selectAuthIsLoggedIn,
  selectAuthToken,
} from '../../../redux/selectors/auth.selectors';
import urls from '../../../urls/urls';

interface IRouteProps {
  path: string;
  component: any;
  isLoggedIn?: boolean;
  token?: string;
}

const AuthenticatedRoute: React.FC<IRouteProps> = ({
  path,
  component,
  isLoggedIn,
  token,
}) => {
  if (isLoggedIn && token) {
    return <Route path={path} component={component} />;
  }

  return <Redirect to={urls.auth.login} />;
};

const mapStateToProps = createStructuredSelector<IAppState, {}>({
  isLoggedIn: selectAuthIsLoggedIn,
  token: selectAuthToken,
});

export default connect(mapStateToProps)(AuthenticatedRoute);
