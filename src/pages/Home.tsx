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
  const [showFooter, setShowFooter] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // estado do loading

  const handleSearch = (searchTerm: string) => {
    if (searchTerm) {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='home'>
      <Header />
      <div className='search-pagination'>
        <SearchBar onSearch={handleSearch} />
        <Pagination />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Cards />
          <TopButton />
          {showFooter && <Footer />}
        </>
      )}
    </div>
  );
}

export default Home;
