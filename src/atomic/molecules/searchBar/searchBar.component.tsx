import queryString from 'query-string';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import {
  SetSearchOption,
  SetSearchTerm,
} from '../../../redux/actions/search.actions';
import { IAppState } from '../../../redux/reducers/main.reducer';
import {
  selectSearchOption,
  selectSearchTerm,
} from '../../../redux/selectors/search.selectors';

interface ISearchBarProps {
  history?: any;
  location?: any;
  setSearchTerm?: (searchTerm: string) => void;
  setSearchOption?: (searchOption: string) => void;
  searchTerm?: string;
  searchOption?: string;
}

const SearchBar: React.FC<ISearchBarProps> = ({
  history,
  location,
  setSearchOption,
  setSearchTerm,
  searchOption = '',
  searchTerm = '',
}) => {
  const submitHandler = (e: any) => {
    e.preventDefault();
    const queryValues = queryString.parse(location.search);
    const newQueryString = {
      ...queryValues,
      search: searchTerm,
      sort: searchOption,
      page: 1,
    };

    history.push({ search: queryString.stringify(newQueryString) });
  };

  const changeHandler = (searchedString: string) => {
    if (setSearchTerm) { setSearchTerm(searchedString); }
  };

  const sortByChangeHandler = (option: string) => {
    if (setSearchOption) { setSearchOption(option); }
  };

  return (
    <section className='search-bar'>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          value={searchTerm}
          onChange={(e) => changeHandler(e.target.value)}
          className='form__input search-input'
          type='text'
          placeholder='search...'
        />
        <select
          onBlur={(e) => sortByChangeHandler(e.target.value)}
          className='form__input sortby-input'
        >
          <option aria-selected='false' value=''>
            Sortby
          </option>
          <option
            selected={searchOption === 'duration'}
            aria-selected={searchOption === 'duration'}
            value='duration'
          >
            Duration
          </option>
          <option
            selected={searchOption === 'price'}
            aria-selected={searchOption === 'price'}
            value='price'
          >
            Price
          </option>
          <option
            selected={searchOption === 'difficulty'}
            aria-selected={searchOption === 'difficulty'}
            value='difficulty'
          >
            Difficulty
          </option>
        </select>
        <button className='btn btn--green' type='submit'>
          Search
        </button>
      </form>
    </section>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  setSearchTerm: (searchTerm: string) => dispatch(SetSearchTerm(searchTerm)),
  setSearchOption: (searchOption: string) =>
    dispatch(SetSearchOption(searchOption)),
});

const mapStateToProps = createStructuredSelector<IAppState, {}>({
  searchTerm: selectSearchTerm,
  searchOption: selectSearchOption,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(SearchBar));
