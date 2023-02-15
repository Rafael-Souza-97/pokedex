import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';
import TopButton from '../components/TopButton';
import Footer from '../components/Footer';
import Loading from '../components/Loading'; // componente de loading
import '../styles/Home.css';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='home'>
      <Header />
      <div className='search-pagination'>
        <SearchBar />
        <Pagination />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Cards />
          <TopButton />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
