import React from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import Pagination from '../components/Pagination';

function Home() {
  return (
    <>
      <Header />
      <div>
        <Pagination />
      </div>

      <Cards />
    </>
  );
}

export default Home;