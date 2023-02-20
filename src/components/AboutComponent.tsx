import React, { useContext, useEffect } from 'react';
import { AiOutlineGithub, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { FaSuitcase } from 'react-icons/fa';
import { PokemonsContext } from '../context';
import happyPokemon from '../assets/happy-pokemon.png';
import capPokemon from '../assets/cap-pokemon.png';

const AboutComponent = () => {
  const { isDarkModeOn } = useContext(PokemonsContext);

  useEffect(() => { 
    if (isDarkModeOn) { 
      document.body.classList.add('dark-mode');
    } else { 
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkModeOn]);

  return (
    <div className={ isDarkModeOn ? 'about-container dark-mode' : 'about-container' } >
      <div className={ isDarkModeOn ? 'text-images dark-mode' : 'text-images' } >
        <div className={ isDarkModeOn ? 'image-about dark-mode' : 'image-about' } >
          <img
            src={ capPokemon }
            alt="pokemon-left"
            className={ isDarkModeOn ? 'cap-pokemon dark-mode' : 'cap-pokemon' } />
        </div>

        <div className={ isDarkModeOn ? 'about-text dark-mode' : 'about-text' } >
          <h1>Sobre a Pokédex</h1>
          <h2>Desafio Técnico</h2>
          <p className={ isDarkModeOn ? 'text dark-mode' : 'text' } >
          Esta aplicação foi desenvolvida como parte de um desafio técnico de uma empresa.
          O objetivo era criar uma plataforma que consumisse dados da{' '}
            <a
              href="https://pokeapi.co/"
              target="_blank"
              rel="noreferrer"
              className={ isDarkModeOn ? 'about-link dark-mode' : 'about-link' }
            > 
              <span className={ isDarkModeOn ? 'poke-api dark-mode' : 'poke-api' }>
                PokeAPI
              </span>
            </a>,
          exibindo os Pokémons em formato de{' '}
            <a
              href= "https://developer.mozilla.org/pt-BR/docs/Web/CSS/grid"
              target="_blank"
              rel="noreferrer"
              className={ isDarkModeOn ? 'about-link dark-mode' : 'about-link' }
            >
              <span className={ isDarkModeOn ? 'grid dark-mode' : 'grid' }>
                GRID
              </span>
            </a>{' '}
          e permitindo que o usuário visualizasse mais detalhes sobre cada um deles.
          Além disso, a aplicação deveria estar devidamente componentizada, versionada 
          e contar com documentação no readme do{' '}
            <a
              href= "https://github.com/Rafael-Souza-97/pokedex"
              target="_blank"
              rel="noreferrer"
              className={ isDarkModeOn ? 'about-link dark-mode' : 'about-link' }
            > 
              <span className={ isDarkModeOn ? 'github-link dark-mode' : 'github-link' }>
                Github
              </span>
            </a>.
          Para elevar ainda mais a qualidade e segurança do projeto,
          implementei testes unitários e de integração.

          Para atingir os objetivos, utilizei diversas tecnologias, como{' '}
            <a
              href= "https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
              className={ isDarkModeOn ? 'about-link dark-mode' : 'about-link' }
            > 
              <span className={ isDarkModeOn ? 'typescript-link dark-mode' : 'typescript-link' }>
                Typescript
              </span>
            </a>,{' '}
            <a
              href= "https://pt-br.reactjs.org/"
              target="_blank"
              rel="noreferrer"
              className={ isDarkModeOn ? 'about-link dark-mode' : 'about-link' }
            > 
              <span className={ isDarkModeOn ? 'react-link dark-mode' : 'react-link' }>
                React
              </span>
            </a>,{' '}
            <a
              href= "https://reactjs.org/docs/context.html"
              target="_blank"
              rel="noreferrer"
              className={ isDarkModeOn ? 'about-link dark-mode' : 'about-link' }
            > 
              <span className={ isDarkModeOn ? 'context-link dark-mode' : 'context-link' }>
                Context API
              </span>
            </a>,{' '}
            <a
              href= "https://axios-http.com/ptbr/docs/intro"
              target="_blank"
              rel="noreferrer"
              className={ isDarkModeOn ? 'about-link dark-mode' : 'about-link' }
            > 
              <span className={ isDarkModeOn ? 'axios-link dark-mode' : 'axios-link' }>
                Axios
              </span>
            </a>,{' '}
            <a
              href= "https://jestjs.io/pt-BR/"
              target="_blank"
              rel="noreferrer"
              className={ isDarkModeOn ? 'about-link dark-mode' : 'about-link' }
            > 
              <span className={ isDarkModeOn ? 'jest-link dark-mode' : 'jest-link' }>
                Jest
              </span>
            </a> e{' '}
            <a
              href= "https://testing-library.com/docs/react-testing-library/intro/"
              target="_blank"
              rel="noreferrer"
              className={ isDarkModeOn ? 'about-link dark-mode' : 'about-link' }
            > 
              <span className={ isDarkModeOn ? 'rtl-link dark-mode' : 'rtl-link' }>
                React Testing Library
              </span>
            </a>.
          O resultado final é uma aplicação escalável e de fácil manutenção.
          </p>

          <h3 className={ isDarkModeOn ? 'repository dark-mode' : 'repository' } >          
            <a
              href= "https://github.com/Rafael-Souza-97/pokedex"
              target="_blank"
              rel="noreferrer"
              className={ isDarkModeOn ? 'pokedex-repo dark-mode' : 'pokedex-repo' }
            >
              <span className={ isDarkModeOn ? 'pokedex-repo dark-mode' : 'pokedex-repo' } >
                Link do repositório da Pokédex
              </span>
            </a>
          </h3>

        </div>

        <div className={ isDarkModeOn ? 'image-about dark-mode' : 'image-about' } >
          <img
            src={ happyPokemon }
            alt="pokemon-left"
            className={ isDarkModeOn ? 'happy-pokemon dark-mode' : 'happy-pokemon' }
          />
        </div>
      </div>

      <div className={ isDarkModeOn ? 'contact-info dark-mode' : 'contact-info' } >
        <h3
          className={ isDarkModeOn ? 'contact-title dark-mode' : 'contact-title' }
        >
          Contato
        </h3>

        <div className={ isDarkModeOn ? 'contact-badges dark-mode' : 'contact-badges' } >
          <div className={ isDarkModeOn ? 'github dark-mode' : 'github' } >
            <AiOutlineGithub size={ 25 }/>
            <h3>
              <a
                href="https://github.com/Rafael-Souza-97/"
                target="_blank"
                rel="noreferrer"
                className={ isDarkModeOn ? 'about-link dark-mode' : 'about-link' }
              >
                <span className={ isDarkModeOn ? 'github-span dark-mode' : 'github-span' } >
                  Github
                </span>
              </a>
            </h3> 
          </div>


  
          <div className={ isDarkModeOn ? 'linkedin dark-mode' : 'linkedin' } >
            <BsLinkedin size={ 20 }/>
            <h3>
              <a
                href="https://www.linkedin.com/in/rafael-souza97/"
                target="_blank"
                rel="noreferrer"
                className={ isDarkModeOn ? 'about-link dark-mode' : 'about-link' }
              >
                <span className={ isDarkModeOn ? 'linkedin-span dark-mode' : 'linkedin-span' } >
                  Linkedin
                </span>
              </a>
            </h3>
          </div>



          <div className={ isDarkModeOn ? 'portfolio dark-mode' : 'portfolio' }>
            <FaSuitcase size={ 20 } className='react-icon'/>
            <h3>
              <a
                href="https://portfolio-rafael-souza.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className={ isDarkModeOn ? 'about-link dark-mode' : 'about-link' }
              >
                <span className={ isDarkModeOn ? 'portfolio-span dark-mode' : 'portfolio-span' } >
                  Portfolio
                </span>
              </a>
            </h3>
          </div>

          <div className={ isDarkModeOn ? 'email dark-mode' : 'email' } >
            <AiOutlineMail size={ 25 } />
            <h3>
              <a
                href= "mailto:souza_rafael.97@outlook.com"
                target="_blank"
                rel="noreferrer"
                className={ isDarkModeOn ? 'about-link dark-mode' : 'about-link' }
              >
                <span className={ isDarkModeOn ? 'email-span dark-mode' : 'email-span' } >
                  Email
                </span>
              </a>
            </h3>
          </div>

          <div className={ isDarkModeOn ? 'phone dark-mode' : 'phone' } >
            <AiOutlinePhone size={ 25 }/>
            <h3>
              <span className={ isDarkModeOn ? 'phone-span dark-mode' : 'phone-span' } >
                (31) 9 8292-5233
              </span>
            </h3>
          </div>
        </div>
      </div>   
    </div>
  );
};

export default AboutComponent;
