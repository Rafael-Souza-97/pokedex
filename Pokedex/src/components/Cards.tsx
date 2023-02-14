import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PokemonsContext } from '../context/index';
import { IPokemonDetail } from '../interfaces/IPokemonDetail';
import Loading from './Loading';
import sadPokemon from '../assets/sad-pokemon.png';
import TypeBadge from './TypeBadge';
import '../styles/Card.css';

const Cards = () => {
  const { isLoading, filteredPokemon, searchResults, search } = useContext(PokemonsContext);

  console.log(filteredPokemon);

  
  if(!filteredPokemon || !filteredPokemon.results) {
    return null;
  }
  
  if (search.length !== 0 && searchResults.results.length === 0) {
    return (
      <div className='pokemon-search-no-results' data-testid='no-results'>
        <p>Desculpe, nenhum pokemon foi encontrado com o nome informado</p>
        <img src={sadPokemon} alt="sad pokemon" className='sad-pokemon-not-found'/>
      </div>
    );
  }
  
  if (search.length === 0 && searchResults.results.length === 0) {
    return (
      <div className="grid-container">
        { isLoading ? (
          <Loading />
        ) : (
          filteredPokemon.results.map((poke: IPokemonDetail, index) => (
            <Link
              to={`/pokemon/${poke.id}`}
              key={index}
              style={{ textDecoration: 'none' }}
            >
              <div key={index} className="card" data-testid={`card-${index}`}>
                <div className='card-image-container'>
                  <img
                    src={poke.sprites.front_default}
                    alt={poke.name}
                    className='card-pokemon-image'
                  />
                </div>
  
                <p>Nº: {poke.id}</p>
  
                <h2>{poke.name[0].toUpperCase() + poke.name.substring(1)}</h2>
  
                <div className="types-container">
                  {poke.types.map((type) => (
                    <TypeBadge key={type.type.name} type={type.type.name} />
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
      <div className="grid-container">
        { isLoading ? (
          <Loading />
        ) : (
          searchResults.results.map((poke: IPokemonDetail, index) => (
            <Link
              to={`/pokemon/${poke.id}`}
              key={index}
              style={{ textDecoration: 'none' }}
            >
              <div key={index} className="card" data-testid={`card-${index}`}>
                <div className='card-image-container'>
                  <img
                    src={poke.sprites.front_default}
                    alt={poke.name}
                    className='card-pokemon-image'
                  />
                </div>
  
                <p>Nº: {poke.id}</p>
  
                <h2>{poke.name[0].toUpperCase() + poke.name.substring(1)}</h2>
  
                <div className="types-container">
                  {poke.types.map((type) => (
                    <TypeBadge key={type.type.name} type={type.type.name} />
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
