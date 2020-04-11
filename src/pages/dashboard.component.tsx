import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { Icon } from '../atomic/atoms/icon/icon.component';
import { Page } from '../atomic/atoms/page/page.component';
import { Spinner } from '../atomic/atoms/spinner/spinner.component';
import RestrictedRoute from '../atomic/molecules/restrictedRoute/restrictedRoute.component';
import { IUser } from '../models/user.model';
import { IAppState } from '../redux/reducers/main.reducer';
import { selectLoggedInUser } from '../redux/selectors/auth.selectors';
import urls from '../urls/urls';

const AccountSettings = React.lazy(() =>
  import('../atomic/organisms/accountSettings/accountSettings.component'),
);
const AccountBookings = React.lazy(() =>
  import('../atomic/organisms/accountBookings/accountBookings.component'),
);
const AccountReviews = React.lazy(() =>
  import('../atomic/organisms/accountReviews/accountReviews.component'),
);
const AccountBilling = React.lazy(() =>
  import('../atomic/organisms/accountBilling/accountBilling.component'),
);
const AdminTours = React.lazy(() =>
  import('../atomic/organisms/adminTours/adminTours.component'),
);
const AdminUsers = React.lazy(() =>
  import('../atomic/organisms/adminUsers/adminUsers.component'),
);
const AdminReviews = React.lazy(() =>
  import('../atomic/organisms/adminReviews/adminReviews.component'),
);
const AdminBookings = React.lazy(() =>
  import('../atomic/organisms/adminBookings/adminBookings.component'),
);

interface IDashboardProps {
  user: IUser;
}

const DashboardPage: React.FC<IDashboardProps> = ({ user }) => {
  return (
    <Page>
      <div className='user-view'>
        <nav className='user-view__menu'>
          <ul className='side-nav'>
            <li>
              <NavLink
                activeClassName='side-nav--active'
                to={urls.account.settings}
              >
                <Icon iconName='icon-settings' />
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName='side-nav--active'
                to={urls.account.bookings}
              >
                <Icon iconName='icon-briefcase' />
                My bookings
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName='side-nav--active'
                to={urls.account.reviews}
              >
                <Icon iconName='icon-star' />
                My review
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName='side-nav--active'
                to={urls.account.billing}
              >
                <Icon iconName='icon-credit-card' />
                Billing
              </NavLink>
            </li>
          </ul>
          {user.role === 'admin' && (
            <div className='admin-nav'>
              <h5 className='admin-nav__heading'>Admin</h5>
              <ul className='side-nav'>
                <li>
                  <NavLink
                    activeClassName='side-nav--active'
                    to={urls.admin.tours}
                  >
                    <Icon iconName='icon-map' />
                    Manage tours
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName='side-nav--active'
                    to={urls.admin.users}
                  >
                    <Icon iconName='icon-users' />
                    Manage users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName='side-nav--active'
                    to={urls.admin.reviews}
                  >
                    <Icon iconName='icon-star' />
                    Manage reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName='side-nav--active'
                    to={urls.admin.bookings}
                  >
                    <Icon iconName='icon-briefcase' />
                    Manage Bookings
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </nav>
        <div className='user-view__content'>
          <Suspense fallback={<Spinner large />}>
            <Switch>
              <Route
                exact
                path={urls.account.settings}
                component={AccountSettings}
              />
              <Route
                exact
                path={urls.account.bookings}
                component={AccountBookings}
              />
              <Route
                exact
                path={urls.account.reviews}
                component={AccountReviews}
              />
              <Route
                exact
                path={urls.account.billing}
                component={AccountBilling}
              />
              <RestrictedRoute
                restrictTo='admin'
                path={urls.admin.tours}
                component={AdminTours}
              />
              <RestrictedRoute
                restrictTo='admin'
                path={urls.admin.users}
                component={AdminUsers}
              />
              <RestrictedRoute
                restrictTo='admin'
                path={urls.admin.reviews}
                component={AdminReviews}
              />
              <RestrictedRoute
                restrictTo='admin'
                path={urls.admin.bookings}
                component={AdminBookings}
              />
            </Switch>
          </Suspense>
        </div>
      </div>
    </Page>
  );
};

const mapStateToProps = createStructuredSelector<IAppState, {}>({
  user: selectLoggedInUser,
});

export default connect(mapStateToProps)(DashboardPage);
