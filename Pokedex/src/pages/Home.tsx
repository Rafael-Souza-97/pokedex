import React from 'react';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';
import TopButton from '../components/TopButton';
import Footer from '../components/Footer';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <Header />
      <div className='search-pagination'>
        <SearchBar />
        <Pagination />
      </div>
      <Cards />
      <TopButton />
      <Footer />
    </div>
  );
}

export default Home;