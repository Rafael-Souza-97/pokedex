import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import pokemonLogo from '../assets/pokemon-logo.png';
import { PokemonsContext } from '../context';
import '../styles/Header.css';
import DarkMode from './DarkMode';

const Header: React.FC = () => {
  const { 
    isDarkModeOn
  } = useContext(PokemonsContext);


  const handleLogoClick = () => {
    console.log('clicou');
    console.log('isDarkModeON?', isDarkModeOn);
    window.location.href = '/';
    console.log('isDarkModeON?', isDarkModeOn);
  };

  return (
    <header className="header" data-testid="header">
      <DarkMode />

      <div className='logo'>
        <Link to='/' onClick={handleLogoClick}>
          <div className="logo">
            <img src={ pokemonLogo } alt="Pokemon logo"/>
          </div>
        </Link>
      </div>

      <div className='header-nav'>
        <nav>
          <ul className='header-navbar'>
            <li className='favorites-link'><Link to="/favorites">Favoritos</Link></li>
            <li className='about-link'><Link to="/about">Sobre</Link></li>
          </ul>
        </nav>
      
      </div>

    </header>
  );
};

export default Header;
