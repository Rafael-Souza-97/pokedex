import React from 'react';
import pokemonLogo from '../assets/pokemon-logo.png';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  const handleLogoClick = () => {
    window.location.href = '/';
  };
  
  return (
    <header className="header">
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
            <li className='favorites-link'><Link to="/favorites">Favorites</Link></li>
            <li className='about-link'><Link to="/about">About</Link></li>
          </ul>
        </nav>
      
      </div>

    </header>
  );
};

export default Header;