import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import urls from "./urls/urls";

import { Header } from "./atomic/organisms/header/header.component";
import { Footer } from "./atomic/organisms/footer/footer.component";
import LoadingPage from "./pages/loading.component";

const Homepage = React.lazy(() => import("./pages/homepage.component"));
const LoginPage = React.lazy(() => import("./pages/login.component"));
const RegisterPage = React.lazy(() => import("./pages/register.component"));
const SinglePage = React.lazy(() => import("./pages/single-tour.component"));
const DashBoardPage = React.lazy(() => import("./pages/dashboard.component"));
const ErrorPage = React.lazy(() => import("./pages/error.component"));

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={urls.homepage} component={Homepage} />
          <Route exact path={urls.auth.login} component={LoginPage} />
          <Route exact path={urls.auth.register} component={RegisterPage} />
          <Route exact path={urls.tours.single} component={SinglePage} />
          <Route path={urls.account.root} component={DashBoardPage} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
