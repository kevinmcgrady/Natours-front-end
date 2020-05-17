import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

interface ISearchBarProps {
  history?: any;
}

const SearchBar: React.FC<ISearchBarProps> = ({ history }) => {
  const [searchString, setSearchString] = useState('');
  const [sortBy, setSortBy] = useState('');

  const submitHandler = (e: any) => {
    e.preventDefault();
    history.push({ search: `?search=${searchString}&sort=${sortBy}` });
  };

  const changeHandler = (searchedString: string) => {
    setSearchString(searchedString);
  };

  const sortByChangeHandler = (option: string) => {
    setSortBy(option);
  };

  return (
    <section className='search-bar'>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          value={searchString}
          onChange={(e) => changeHandler(e.target.value)}
          className='form__input search-input'
          type='text'
          placeholder='search...'
        />
        <select
          onBlur={(e) => sortByChangeHandler(e.target.value)}
          className='form__input sortby-input'
          name=''
          id=''
        >
          <option role='option' aria-selected='false' value=''>
            Sortby
          </option>
          <option
            role='option'
            aria-selected={sortBy === 'duration'}
            value='duration'
          >
            Duration
          </option>
          <option
            role='option'
            aria-selected={sortBy === 'price'}
            value='price'
          >
            Price
          </option>
          <option
            role='option'
            aria-selected={sortBy === 'difficulty'}
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

export default withRouter(SearchBar);
