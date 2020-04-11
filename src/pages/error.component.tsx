import React from "react";
import urls from "../urls/urls";
import { ErrorTemplate } from "../atomic/templates/404/404.component";

const ErrorPage = () => {
  return (
    <ErrorTemplate
      title="404"
      errorMessage="Page not found!"
      linkText="Go home"
      linkURL={urls.homepage}
    />
  );
};

export default ErrorPage;
