import React from 'react';

import { ErrorTemplate } from '../atomic/templates/404/404.component';
import urls from '../urls/urls';

const ErrorPage = () => {
  return (
    <ErrorTemplate
      title='404'
      errorMessage='Page not found!'
      linkText='Go home'
      linkURL={urls.homepage}
    />
  );
};

export default ErrorPage;
