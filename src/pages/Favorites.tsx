import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import FavoritesCards from '../components/FavoritesCards';
import Loading from '../components/Loading';
import '../styles/Favorites.css';

function Favorites() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className='favorites'>
      <Header />
      { isLoading ? (
        <Loading />
      ) : (
        <div className='favorites-cards'>
          <FavoritesCards />
        </div>
      )}

    </div>
  );
}

export default Favorites;
