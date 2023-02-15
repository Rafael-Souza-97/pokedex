import React from 'react';
import { AiOutlineGithub, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { FaSuitcase, FaBriefcase } from 'react-icons/fa';
import happyPokemon from '../assets/happy-pokemon.png';
import capPokemon from '../assets/cap-pokemon.png';

const AboutComponent = () => {
  return (
    <div className='about-container'>
      <div className='left-image-about'>
        <img src={capPokemon} alt="pokemon-left" className='cap-pokemon'/>
      </div>
  
      <div className='about-text'>
        <h1>Sobre a Pokedex</h1>
        <h2>Desafio Técnico</h2>
        <p>
          Esta aplicação foi desenvolvida como parte de um desafio técnico de uma empresa.
          O objetivo era criar uma plataforma que consumisse dados da             
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noreferrer"
            className='about-link'
          > 
            PokeAPI
          </a>, 
          exibindo os Pokémons em formato de 
          <a
            href= "https://developer.mozilla.org/pt-BR/docs/Web/CSS/grid"
            target="_blank"
            rel="noreferrer"
            className='about-link'
          > 
            GRID
          </a> 
          e permitindo que o usuário visualizasse mais detalhes sobre cada um deles.
          Além disso, a aplicação deveria estar 
          <a
            href= "https://github.com/Rafael-Souza-97/pokedex"
            target="_blank"
            rel="noreferrer"
            className='about-link'
          >
            devidamente componentizada, versionada e contar com documentação no readme do Github.
          </a> 
          Para elevar ainda mais a qualidade e segurança do projeto,
          foi implementado testes unitários e de integração.

          Para atingir os objetivos, utilizei diversas tecnologias, como TypeScript,
          React, Context API, AXIOS, Jest e React Testing Library.
          O resultado final é uma aplicação escalável e de fácil manutenção.
        </p>
      </div>

      <div className='contact-info'>
        <h3>Contato</h3>

        <div className='email'>
          <AiOutlineMail />
          <h3><a
            href= "mailto:souza_rafael.97@outlook.com"
            target="_blank"
            rel="noreferrer"
            className='about-link'
          >
              Email
          </a></h3>
        </div>

        <div className='phone'>
          <AiOutlinePhone />
          <h3>(31) 9 8292-5233</h3>
        </div>
  
        <div className='linkedin'>
          <BsLinkedin />
          <h3>
            <a
              href="https://www.linkedin.com/in/rafael-souza97/"
              target="_blank"
              rel="noreferrer"
              className='about-link'
            >
              LinkedIn
            </a>
          </h3>
        </div>

        <div className='github'>
          <AiOutlineGithub />
          <h3>
            <a
              href="https://github.com/Rafael-Souza-97/pokedex"
              target="_blank"
              rel="noreferrer"
              className='about-link'
            >
              GitHub
            </a>
          </h3>
        </div>

        <div className='portfolio'>
          <FaSuitcase />
          <h3>
            <a
              href="https://portfolio-rafael-souza.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className='about-link'
            >
              Portfolio
            </a>
          </h3>
        </div>
      </div>

      <div className='left-image-about'>
        <img src={capPokemon} alt="pokemon-left" className='cap-pokemon'/>
      </div>
    </div>
  );
};

export default AboutComponent;
