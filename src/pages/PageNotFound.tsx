import React from 'react';
import { Link } from 'react-router-dom';
import sadPokemon from '../assets/sad-pokemon.jpg';
import error404 from '../assets/404.png';
import '../styles/PageNotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <img
        className="error404-image"
        src={ error404 }
        alt="Pikachu crying because the page requested was not found"
      />
      <h1 className="not-found-request-text">
        Page requested not found
        <span role="img" aria-label="Crying emoji"> 😭</span>
      </h1>
      <p className="page-not-found-text">
        Desculpe, a página que você está tentando acessar não foi encontrada.
      </p>
      <img
        className="not-found-image"
        src={ sadPokemon }
        alt="Pikachu crying because the page requested was not found"
      />
      <Link to="/">
        <button type="button" className="redirect-button">Voltar para a página inicial</button>
      </Link>
    </div>
  );
};

export default NotFound;
