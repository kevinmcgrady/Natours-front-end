import queryString from 'query-string';
import React from 'react';
import { withRouter } from 'react-router-dom';

interface IPaginationProps {
  totalPages?: number;
  history?: any;
  location?: any;
}

const Pagination: React.FC<IPaginationProps> = ({
  history,
  totalPages = 0,
  location,
}) => {
  const pages = [];
  const currentPage = parseInt(
    location.search?.split('page')[1]?.split('=')[1],
    10,
  );

  const onClickHandler = (pageNumber: number) => {
    const currentQueryString = queryString.parse(location.search);
    const newQueryString = {
      ...currentQueryString,
      page: pageNumber,
    };
    history.push({ search: queryString.stringify(newQueryString) });
  };

  for (let i: number = 0; i < totalPages; i++) {
    pages.push(
      <div
        role='button'
        className={`page ${currentPage === i + 1 ? 'active' : ''}`}
        onClick={() => onClickHandler(i + 1)}
      >
        {i + 1}
      </div>,
    );
  }

  return (
    <div className='pagination-container'>{pages.map((page) => page)}</div>
  );
};

export default withRouter(Pagination);
