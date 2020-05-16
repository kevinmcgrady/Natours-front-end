import Cookies from 'js-cookie';
import React, { Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import AuthenticatedRoute from './atomic/molecules/authenticatedRoute/authenticatedRoute.component';
import { Footer } from './atomic/organisms/footer/footer.component';
import Header from './atomic/organisms/header/header.component';
import LoadingPage from './pages/loading.component';
import { Logout } from './redux/actions/auth.actions';
import urls from './urls/urls';

const Homepage = React.lazy(() => import('./pages/homepage.component'));
const LoginPage = React.lazy(() => import('./pages/login.component'));
const RegisterPage = React.lazy(() => import('./pages/register.component'));
const SinglePage = React.lazy(() => import('./pages/single-tour.component'));
const DashBoardPage = React.lazy(() => import('./pages/dashboard.component'));
const CheckoutPage = React.lazy(() => import('./pages/checkout.component'));
const ForgotPasswordPage = React.lazy(() =>
  import('./pages/forgotPassword.component'),
);
const ErrorPage = React.lazy(() => import('./pages/error.component'));

interface IAppProps {
  logout: () => void;
}

const App: React.FC<IAppProps> = ({ logout }) => {
  // check if cookie is still valid
  useEffect(() => {
    const jwtCookie = Cookies.get('jwt');
    if (!jwtCookie) {
      logout();
    }
  }, [logout]);

  return (
    <Suspense fallback={<LoadingPage />}>
      <Header />
      <Switch>
        <Route exact path={urls.homepage} component={Homepage} />
        <Route exact path={urls.auth.login} component={LoginPage} />
        <Route exact path={urls.auth.register} component={RegisterPage} />
        <Route exact path={urls.tours.single} component={SinglePage} />
        <AuthenticatedRoute
          path={urls.account.root}
          component={DashBoardPage}
        />
        <AuthenticatedRoute path={urls.checkout} component={CheckoutPage} />
        <Route
          exact
          path={urls.auth.forgotPassword}
          component={ForgotPasswordPage}
        />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </Suspense>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  logout: () => dispatch(Logout()),
});

export default connect(null, mapDispatchToProps)(App);
