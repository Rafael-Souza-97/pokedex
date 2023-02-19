import React, { useContext, useEffect } from 'react';
import pokeball from '../assets/pokeball.png';
import { PokemonsContext } from '../context';
import '../styles/Loading-Dark.css';
import '../styles/Loading.css';

const Loading = () => {
  const { isDarkModeOn } = useContext(PokemonsContext);

  useEffect(() => { 
    if (isDarkModeOn) { 
      document.body.classList.add('dark-mode');
    } else { 
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkModeOn]);

  return (
    <div className={ isDarkModeOn ? 'loading-screen dark-mode' : 'loading-screen' } >
      <div 
        data-testid='loading-logo'
        className={
          isDarkModeOn ? 'loading-container dark-mode' : 'loading-container'
        }>

        <img
          src={ pokeball }
          alt="pokeball-loading"
          className={ isDarkModeOn ? 'loading-image dark-mode' : 'loading-image' }
        />
      </div>
    </div>
  );
};

export default Loading;
