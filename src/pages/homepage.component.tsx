import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Page } from '../atomic/atoms/page/page.component';
import { CardContainer } from '../atomic/molecules/cards/card-container/card-container.component';
import { Card } from '../atomic/molecules/cards/card/card.component';
import LoadingPage from '../pages/loading.component';
import { FetchTours } from '../redux/actions/tours.actions';
import { IAppState } from '../redux/reducers/main.reducer';
import {
  selectIsLoading,
  selectTours,
} from '../redux/selectors/tours.selectors';

interface IHomepageProps {
  fetchTours: () => null;
  isLoading: boolean;
  tours: [];
}

const Homepage: React.FC<IHomepageProps> = ({
  fetchTours,
  isLoading,
  tours = [],
}) => {
  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Page>
      <CardContainer>
        {tours.map((tour, index) => (
          <Card key={index} tour={tour} />
        ))}
      </CardContainer>
    </Page>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchTours: () => dispatch(FetchTours()),
});

const mapStateToProps = createStructuredSelector<IAppState, {}>({
  isLoading: selectIsLoading,
  tours: selectTours,
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
