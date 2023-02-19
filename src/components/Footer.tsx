import React, { useContext, useEffect } from 'react';
import { PokemonsContext } from '../context';
import '../styles/Dark-Mode/Footer-Dark.css';
import '../styles/Footer.css';

const Footer = () => {
  const { isDarkModeOn } = useContext(PokemonsContext);

  useEffect(() => { 
    if (isDarkModeOn) { 
      document.body.classList.add('dark-mode');
    } else { 
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkModeOn]);

  return (
    <p
      className={ isDarkModeOn ? 'footer-text dark-mode' : 'footer-text' }
      data-testid={ 'footer' }
    >
        Criado por{' '}
      <a href='https://github.com/Rafael-Souza-97' target='_blank' rel='noreferrer'>
        <span
          className={ isDarkModeOn ? 'rafael dark-mode' : 'rafael' }
        >
          Rafael Souza
        </span>
      </a>{' '}

        utilizando{' '}
      <a href='https://www.typescriptlang.org/' target='_blank' rel='noreferrer'>
        <span
          className={ isDarkModeOn ? 'typescript dark-mode' : 'typescript' }
        >
          Typescript
        </span>
      </a>{' '}
  
        e{' '}
      <a href='https://pt-br.reactjs.org/' target='_blank' rel='noreferrer'>
        <span
          className={ isDarkModeOn ? 'react dark-mode' : 'react' }
        >
          React
        </span>
      </a>
    </p>
  );
};

export default Footer;
