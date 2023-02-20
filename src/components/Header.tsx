import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PokemonsContext } from '../context';
import DarkMode from './DarkMode';
import pokemonLogo from '../assets/pokemon-logo.png';
import '../styles/Dark-Mode/Header-Dark.css';
import '../styles/Header.css';

const Header: React.FC = () => {
  const { isDarkModeOn } = useContext(PokemonsContext);

  useEffect(() => { 
    if (isDarkModeOn) { 
      document.body.classList.add('dark-mode');
    } else { 
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkModeOn]);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <header className={ isDarkModeOn ? 'header dark-mode' : 'header' } data-testid='header' >
      <DarkMode />

      <div className={ isDarkModeOn ? 'logo-container dark-mode' : 'logo-container' } >
        <Link to='/' onClick={ handleLogoClick }>
          <div className={ isDarkModeOn ? 'logo dark-mode' : 'logo' } >
            <img src={ pokemonLogo } alt='Pokemon logo' />
          </div>
        </Link>
      </div>

      <div className={ isDarkModeOn ? 'header-nav dark-mode' : 'header-nav' } >
        <nav>
          <ul className={ isDarkModeOn ? 'header-navbar dark-mode' : 'header-navbar' } >
            <li className={ isDarkModeOn ? 'favorites-link dark-mode' : 'favorites-link' } >
              <Link to="/favorites">
                Favoritos
              </Link>
            </li>
  
            <li className={ isDarkModeOn ? 'about-link dark-mode' : 'about-link' } >
              <Link to="/about">
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      
      </div>

    </header>
  );
};

export default Header;
