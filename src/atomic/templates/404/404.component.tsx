import React from 'react';
import { Link } from 'react-router-dom';

import { Page } from '../../atoms/page/page.component';

interface I404Props {
  title: string;
  errorMessage: string;
  linkText: string;
  linkURL: string;
}

export const ErrorTemplate: React.FC<I404Props> = ({
  title,
  errorMessage,
  linkText,
  linkURL,
}) => {
  return (
    <Page>
      <div className="info-card">
        <div className="info-card__content">
          <img
            className="error-image"
            src="https://i.imgur.com/Q2BAOd2.png"
            alt="Lost man with map"
          />
          <h1>{title}</h1>
          <h2>{errorMessage}</h2>
          <Link className="btn btn--green btn--small" to={linkURL}>
            {linkText}
          </Link>
        </div>
      </div>
    </Page>
  );
};
