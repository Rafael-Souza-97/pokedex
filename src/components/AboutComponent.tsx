import React from 'react';
import { AiOutlineGithub, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { FaSuitcase } from 'react-icons/fa';
import happyPokemon from '../assets/happy-pokemon.png';
import capPokemon from '../assets/cap-pokemon.png';

const AboutComponent = () => {
  return (
    <div className='about-container'>
      <div className='text-images'>
        <div className='image-about'>
          <img src={capPokemon} alt="pokemon-left" className='cap-pokemon'/>
        </div>


        <div className='about-text'>
          <h1>Sobre a Pokédex</h1>
          <h2>Desafio Técnico</h2>
          <p className='text'>
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
          Além disso, a aplicação deveria estar devidamente componentizada, versionada 
          e contar com documentação no readme do
            <a
              href= "https://github.com/Rafael-Souza-97/pokedex"
              target="_blank"
              rel="noreferrer"
              className='about-link'
            > 
              Github.
            </a>
          Para elevar ainda mais a qualidade e segurança do projeto,
          implementei testes unitários e de integração.

          Para atingir os objetivos, utilizei diversas tecnologias, como
            <a
              href= "https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
              className='about-link'
            > 
              Typescript
            </a>,
            <a
              href= "https://pt-br.reactjs.org/"
              target="_blank"
              rel="noreferrer"
              className='about-link'
            > 
              React
            </a>,
            <a
              href= "https://reactjs.org/docs/context.html"
              target="_blank"
              rel="noreferrer"
              className='about-link'
            > 
               Context-API
            </a>,
            <a
              href= "https://axios-http.com/ptbr/docs/intro"
              target="_blank"
              rel="noreferrer"
              className='about-link'
            > 
               Axios
            </a>,
            <a
              href= "https://jestjs.io/pt-BR/"
              target="_blank"
              rel="noreferrer"
              className='about-link'
            > 
               Jest
            </a> e
            <a
              href= "https://testing-library.com/docs/react-testing-library/intro/"
              target="_blank"
              rel="noreferrer"
              className='about-link'
            > 
              React Testing Library
            </a>.
          O resultado final é uma aplicação escalável e de fácil manutenção.
          </p>

          <h3 className='repository'>          
            <a
              href= "https://github.com/Rafael-Souza-97/pokedex"
              target="_blank"
              rel="noreferrer"
              className='about-link'
            >
            Link do repositório da Pokédex
            </a>
          </h3>

        </div>

        <div className='image-about'>
          <img src={happyPokemon} alt="pokemon-left" className='happy-pokemon'/>
        </div>
      </div>

      <div className='contact-info'>
        <h3>Contato</h3>

        <div className='contact-badges'>
          <div className='email'>
            <AiOutlineMail size={25}/>
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
            <AiOutlinePhone size={25}/>
            <h3>(31) 9 8292-5233</h3>
          </div>
  
          <div className='linkedin'>
            <BsLinkedin size={20}/>
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
            <AiOutlineGithub size={25}/>
            <h3>
              <a
                href="https://github.com/Rafael-Souza-97/"
                target="_blank"
                rel="noreferrer"
                className='about-link'
              >
                GitHub
              </a>
            </h3>
          </div>

          <div className='portfolio'>
            <FaSuitcase size={20} className='react-icon'/>
            <h3>
              <a
                href="https://portfolio-rafael-souza.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className='about-link'
              >
                Portfólio
              </a>
            </h3>
          </div>
        </div>
      </div>   
    </div>
  );
};

export default AboutComponent;
