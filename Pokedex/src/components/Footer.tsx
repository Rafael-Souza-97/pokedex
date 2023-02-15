import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <p className="footer-text" data-testid={'footer'}>
        Criado por{' '}
      <a href="https://github.com/Rafael-Souza-97" target="_blank" rel="noreferrer">
        <span className="rafael">Rafael Souza</span>
      </a>{' '}
        utilizando{' '}
      <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
        <span className="react">Typescript</span>
      </a>{' '}
        e{' '}
      <a href="https://pt-br.reactjs.org/" target="_blank" rel="noreferrer">
        <span className="react">React</span>
      </a>
    </p>
  );
};

export default Footer;
