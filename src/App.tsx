import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import urls from "./urls/urls";
import { Header } from "./atomic/organisms/header/header.component";
import { Footer } from "./atomic/organisms/footer/footer.component";

const Homepage = React.lazy(() => import("./pages/homepage.component"));
const LoginPage = React.lazy(() => import("./pages/login.component"));
const RegisterPage = React.lazy(() => import("./pages/register.component"));
const SingleTourPage = React.lazy(() =>
  import("./pages/single-tour.component")
);
const ErrorPage = React.lazy(() => import("./pages/error.component"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={urls.homepage} component={Homepage} />
          <Route exact path={urls.auth.login} component={LoginPage} />
          <Route exact path={urls.auth.register} component={RegisterPage} />
          <Route exact path={urls.tours.single} component={SingleTourPage} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
