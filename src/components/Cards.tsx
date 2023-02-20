import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PokemonsContext } from '../context/index';
import IPokemonDetail from '../interfaces/IPokemonDetail';
import Loading from './Loading';
import TypeBadge from './TypeBadge';
import sadPokemon from '../assets/sad-pokemon.png';
import '../styles/Dark-Mode/Cards-Dark.css';
import '../styles/Cards.css';

const Cards =  () => { 
  const { 
    isLoading,
    filteredPokemon,
    searchResults,
    search,
    isDarkModeOn
  } = useContext(PokemonsContext);

  useEffect(() => { 
    if (isDarkModeOn) { 
      document.body.classList.add('dark-mode');
    } else { 
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkModeOn]);

  if(!filteredPokemon || !filteredPokemon.results) return null;

  if (isLoading) return <Loading />;
  
  if (search.length !== 0 && searchResults.results.length === 0) { 
    return (
      <div 
        className={ 
          isDarkModeOn ? 'pokemon-search-no-results dark-mode' : 'pokemon-search-no-results' 
        } 
        data-testid='no-results'
      >

        <p>Desculpe, nenhum pokémon foi encontrado com o nome informado</p>

        <img
          src={ sadPokemon}
          alt="sad pokemon"
          className={ 
            isDarkModeOn ? 'sad-pokemon-not-found dark-mode' : 'sad-pokemon-not-found'
          }/>
      </div>
    );
  }
  
  if (search.length === 0 && searchResults.results.length === 0) { 
    return (
      <div className={ isDarkModeOn ? 'grid-container dark-mode' : 'grid-container' }>

        {  isLoading ? (
          <Loading />
        ) : (
          filteredPokemon.results.map((poke: IPokemonDetail, index: number) => (
            <Link
              to={ `/pokemon/${ poke.id}`}
              key={ index}
              style={ {  textDecoration: 'none' }}
            >
              <div
                key={ index}
                className={  isDarkModeOn ? 'card dark-mode' : 'card'}
                data-testid={ `card-${ index}`}
              >
                <div className={
                  isDarkModeOn ? 'card-image-container dark-mode' : 'card-image-container'
                }>
                  <img
                    src={ poke.sprites.front_default}
                    alt={ poke.name}
                    className={
                      isDarkModeOn ? 'card-pokemon-image dark-mode' : 'card-pokemon-image' 
                    }/>
                </div>
  
                <p>Nº: { poke.id}</p>
  
                <h2>{ poke.name[0].toUpperCase() + poke.name.substring(1)}</h2>
  
                <div className={ isDarkModeOn ? 'types-container dark-mode' : 'types-container' }>
                  { poke.types.map((type) => (
                    <TypeBadge key={ type.type.name } type={ type.type.name } />
                  ))}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    );
  } else {  
    return (
      <div className={ isDarkModeOn ? 'grid-container dark-mode' : 'grid-container' }>
        {  isLoading ? (
          <Loading />
        ) : (
          searchResults.results.map((poke: IPokemonDetail, index: number) => (
            <Link
              to={ `/pokemon/${ poke.id }`}
              key={ index}
              style={{ textDecoration: 'none' }}
            >
              <div
                key={ index }
                className={ isDarkModeOn ? 'card dark-mode' : 'card' }
                data-testid={ `card-${ index }`}
              >
                <div className={  
                  isDarkModeOn ? 'card-image-container dark-mode' : 'card-image-container'
                }>
                  <img
                    src={ poke.sprites.front_default }
                    alt={ poke.name }
                    className={  
                      isDarkModeOn ? 'card-pokemon-image dark-mode' : 'card-pokemon-image'
                    }
                  />
                </div>
  
                <p>Nº: { poke.id }</p>
  
                <h2>{ poke.name[0].toUpperCase() + poke.name.substring(1) }</h2>
  
                <div className={ isDarkModeOn ? 'types-container dark-mode' : 'types-container' }>
                  { poke.types.map((type) => (
                    <TypeBadge key={ type.type.name } type={ type.type.name } />
                  ))}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    );
  }  
};

export default Cards;
