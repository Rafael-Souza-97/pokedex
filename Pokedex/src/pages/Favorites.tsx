import React from 'react';
import Header from '../components/Header';
import FavoritesCards from '../components/FavoritesCards';
import '../styles/Favorites.css';

function Favorites() {
  return (
    <div className='favorites'>
      <Header />
      <FavoritesCards  />
    </div>
  );
}

export default Favorites;