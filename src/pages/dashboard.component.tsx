import React, { Suspense } from "react";
import { Page } from "../atomic/atoms/page/page.component";
import { Icon } from "../atomic/atoms/icon/icon.component";
import { NavLink, Route, Switch } from "react-router-dom";
import urls from "../urls/urls";

import { Spinner } from "../atomic/atoms/spinner/spinner.component";

const AccountSettings = React.lazy(() =>
  import("../atomic/organisms/accountSettings/accountSettings.component")
);
const AccountBookings = React.lazy(() =>
  import("../atomic/organisms/accountBookings/accountBookings.component")
);
const AccountReviews = React.lazy(() =>
  import("../atomic/organisms/accountReviews/accountReviews.component")
);
const AccountBilling = React.lazy(() =>
  import("../atomic/organisms/accountBilling/accountBilling.component")
);
const AdminTours = React.lazy(() =>
  import("../atomic/organisms/adminTours/adminTours.component")
);
const AdminUsers = React.lazy(() =>
  import("../atomic/organisms/adminUsers/adminUsers.component")
);
const AdminReviews = React.lazy(() =>
  import("../atomic/organisms/adminReviews/adminReviews.component")
);
const AdminBookings = React.lazy(() =>
  import("../atomic/organisms/adminBookings/adminBookings.component")
);

const DashboardPage: React.FC<{}> = () => {
  return (
    <Page>
      <div className="user-view">
        <nav className="user-view__menu">
          <ul className="side-nav">
            <li>
              <NavLink
                activeClassName="side-nav--active"
                to={urls.account.settings}
              >
                <Icon iconName="icon-settings" />
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="side-nav--active"
                to={urls.account.bookings}
              >
                <Icon iconName="icon-briefcase" />
                My bookings
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="side-nav--active"
                to={urls.account.reviews}
              >
                <Icon iconName="icon-star" />
                My review
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="side-nav--active"
                to={urls.account.billing}
              >
                <Icon iconName="icon-credit-card" />
                Billing
              </NavLink>
            </li>
          </ul>
          <div className="admin-nav">
            <h5 className="admin-nav__heading">Admin</h5>
            <ul className="side-nav">
              <li>
                <NavLink
                  activeClassName="side-nav--active"
                  to={urls.admin.tours}
                >
                  <Icon iconName="icon-map" />
                  Manage tours
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="side-nav--active"
                  to={urls.admin.users}
                >
                  <Icon iconName="icon-users" />
                  Manage users
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="side-nav--active"
                  to={urls.admin.reviews}
                >
                  <Icon iconName="icon-star" />
                  Manage reviews
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="side-nav--active"
                  to={urls.admin.bookings}
                >
                  <Icon iconName="icon-briefcase" />
                  Manage Bookings
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="user-view__content">
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
              <Route exact path={urls.admin.tours} component={AdminTours} />
              <Route exact path={urls.admin.users} component={AdminUsers} />
              <Route exact path={urls.admin.reviews} component={AdminReviews} />
              <Route
                exact
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

export default DashboardPage;
