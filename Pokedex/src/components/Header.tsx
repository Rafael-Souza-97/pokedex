import React from 'react';
import pokemonLogo from '../assets/pokemon-logo.png';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to='/'>
        <div className="logo">
          <img src={ pokemonLogo } alt="Pokemon logo" />
        </div>
      </Link>

      <nav>
        <ul className='header-navbar'>
          <li className='home-link' ><Link to="/Comparison">Comparison</Link></li>
          <li className='comparison-link'><Link to="/favorites">Favorites</Link></li>
          <li className='about-link'><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;