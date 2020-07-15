import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Page } from '../atomic/atoms/page/page.component';
import { CardContainer } from '../atomic/molecules/cards/card-container/card-container.component';
import { Card } from '../atomic/molecules/cards/card/card.component';
import Pagination from '../atomic/molecules/pagination/pagination.component';
import SearchBar from '../atomic/molecules/searchBar/searchBar.component';
import { ErrorTemplate } from '../atomic/templates/404/404.component';
import ITour from '../models/tour.model';
import LoadingPage from '../pages/loading.component';
import { FetchTours } from '../redux/actions/tours.actions';
import { IAppState } from '../redux/reducers/main.reducer';
import {
  selectIsLoading,
  selectTours,
  selectTourTotalPages,
} from '../redux/selectors/tours.selectors';
import urls from '../urls/urls';

interface IHomepageProps {
  fetchTours: (queryString: string) => null;
  isLoading: boolean;
  tours: ITour[] | [];
  totalPages: number;
  location: any;
}

const Homepage: React.FC<IHomepageProps> = ({
  fetchTours,
  isLoading,
  tours = [],
  totalPages,
  location,
}) => {
  const paginationProps = {
    totalPages,
  };
  useEffect(() => {
    const queryString = location.search;
    fetchTours(queryString);
  }, [fetchTours, location]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!tours || tours.length === 0) {
    return (
      <ErrorTemplate
        title='No Tours'
        errorMessage='No tours were found'
        linkText='All Tours'
        linkURL={urls.homepage}
      />
    );
  }

  return (
    <Page>
      <SearchBar />
      <CardContainer>
        {tours.map((tour, index) => (
          <Card key={index} tour={tour} />
        ))}
      </CardContainer>
      <Pagination {...paginationProps} />
      <p>Get that pineapple off the pizza ;)</p>
    </Page>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchTours: (queryString: string) => dispatch(FetchTours(queryString)),
});

const mapStateToProps = createStructuredSelector<IAppState, {}>({
  isLoading: selectIsLoading,
  tours: selectTours,
  totalPages: selectTourTotalPages,
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
