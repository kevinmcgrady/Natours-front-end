import React, { useEffect } from "react";
import LoadingPage from "../pages/loading.component";
import { createStructuredSelector } from "reselect";
import {
  selectIsLoading,
  selectTours,
} from "../redux/selectors/tours.selectors";
import { connect } from "react-redux";
import { Card } from "../atomic/molecules/cards/card/card.component";
import { Page } from "../atomic/atoms/page/page.component";
import { FetchTours } from "../redux/actions/tours.actions";
import { CardContainer } from "../atomic/molecules/cards/card-container/card-container.component";
import { IAppState } from "../redux/reducers/main.reducer";

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
        {tours.map((tour) => (
          <Card tour={tour} />
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
