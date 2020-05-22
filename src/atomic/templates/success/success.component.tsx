import React from 'react';
import { Link } from 'react-router-dom';

import SuccessImage from '../../../assets/images/success.svg';
import { Page } from '../../atoms/page/page.component';

interface ISuccessProps {
  title: string;
  successMessage: string;
  linkText: string;
  linkURL: string;
}

export const SuccessTemplate: React.FC<ISuccessProps> = ({
  title,
  successMessage,
  linkText,
  linkURL,
}) => {
  return (
    <Page>
      <div className='info-card'>
        <div className='info-card__content'>
          <img
            className='error-image'
            src={SuccessImage}
            alt='Lost man with map'
          />
          <h1>{title}</h1>
          <h2>{successMessage}</h2>
          <Link className='btn btn--green btn--small' to={linkURL}>
            {linkText}
          </Link>
        </div>
      </div>
    </Page>
  );
};
