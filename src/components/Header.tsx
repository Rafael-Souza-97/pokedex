import React from 'react';
import { Link } from 'react-router-dom';
import pokemonLogo from '../assets/pokemon-logo.png';
import '../styles/Header.css';

const Header: React.FC = () => {
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <header className="header" data-testid="header">
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
