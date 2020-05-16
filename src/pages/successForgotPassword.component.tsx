import React from 'react';

import { SuccessTemplate } from '../atomic/templates/success/success.component';
import urls from '../urls/urls';

const SuccessForgotPasswordPage: React.FC<{}> = () => {
  return (
    <SuccessTemplate
      linkText='Home'
      linkURL={urls.homepage}
      successMessage='An email has been sent to your index'
      title='Email sent!'
    />
  );
};

export default SuccessForgotPasswordPage;
