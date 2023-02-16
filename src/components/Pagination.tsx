import React, { useContext } from 'react';
import { PokemonsContext } from '../context';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import '../styles/Pagination.css';

function Pagination() {
  const { totalPages, page, setPage } = useContext(PokemonsContext);
  const { limit, offset } = page;

  const onLeftClickHandle = () => {
    let newPage = page.page - 1;
    let newOffset = offset - limit;
    const newLimit = limit;

    if (newPage < 1) newPage = 1;
    if (newOffset < 0) newOffset = 0;

    setPage({ ...page, page: newPage, limit: newLimit, offset: newOffset });
  };

  const onRightClickHandle = () => {
    let newPage = page.page + 1;
    const newOffset = offset + 50;

    if (newPage > totalPages) newPage = totalPages;
    if (newPage > 20) newPage = 20;
    
    setPage({ ...page, page: newPage, limit: 50, offset: newOffset });
  };

  return (
    <div className='pagination-container' data-testid='pagination'>
      <button 
        disabled={page.page === 1}
        onClick={onLeftClickHandle}
        className='pagination-left-button'
        data-testid='left-button'
      >
        <HiChevronDoubleLeft />
      </button>

      <div className='pagination-text' data-testid='pagination-text' >
        {`${page.page} de ${totalPages}`}
      </div>

      <button 
        disabled={ page.page === totalPages }
        onClick={onRightClickHandle}
        className='pagination-right-button'
        data-testid='right-button'
      >
        <HiChevronDoubleRight />
      </button>
    </div>
  );
}

export default Pagination;
