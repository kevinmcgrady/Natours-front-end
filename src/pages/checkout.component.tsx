import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Page } from '../atomic/atoms/page/page.component';
import { Checkout } from '../atomic/molecules/checkout/checkout.component';
import { ErrorTemplate } from '../atomic/templates/404/404.component';
import ITour from '../models/tour.model';
import LoadingPage from '../pages/loading.component';
import { FetchSingleTour } from '../redux/actions/tours.actions';
import { IAppState } from '../redux/reducers/main.reducer';
import {
  selectIsLoading,
  selectTour,
} from '../redux/selectors/tours.selectors';
import urls from '../urls/urls';

interface ICheckoutPageProps {
  match?: any;
  isLoading: boolean;
  tour: ITour;
  fetchTour: (tourId: string) => void;
}

const CheckoutPage: React.FC<ICheckoutPageProps> = ({
  match,
  fetchTour,
  isLoading,
  tour,
}) => {
  useEffect(() => {
    const id = match.params.id;
    fetchTour(id);
  }, [match, fetchTour]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!isLoading && !tour) {
    return (
      <ErrorTemplate
        title='Tour not found'
        errorMessage='This tour was not found!'
        linkText='Back to tours'
        linkURL={urls.homepage}
      />
    );
  }
  return (
    <Page>
      <Checkout tour={tour} />
    </Page>
  );
};

const mapStateToProps = createStructuredSelector<IAppState, {}>({
  tour: selectTour,
  isLoading: selectIsLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchTour: (tourId: string) => dispatch(FetchSingleTour(tourId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
