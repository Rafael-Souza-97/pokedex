import React from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import '../styles/Home.css';

function Home() {
  return (
    <>
      <Header />
      <div className='search-pagination'>
        <SearchBar />
        <Pagination />
      </div>
      <Cards />
    </>
  );
}

export default Home;