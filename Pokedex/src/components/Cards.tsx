import React, { useContext } from 'react';
import { PokemonsContext } from '../context/index';
import { IPokemonDetail } from '../interfaces/IPokemonDetail';
import '../styles/Card.css';

const Cards = () => {
  const { isLoading, pokemon } = useContext(PokemonsContext);

  if(!pokemon || !pokemon.results) return null;

  console.log(pokemon.results);

  return (
    <div className="grid-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        pokemon.results.map((poke: IPokemonDetail, index) => (
          <div key={index} className="card">
            <div>
              <img src={poke.sprites.front_default} alt={poke.name} />
            </div>
            <p>Nº: {poke.id}</p>
            <h3>{poke.name}</h3>
            <div className="types-container">
              {poke.types.map((type) => (
                <h2 key={type.type.name} className='types'>{type.type.name}</h2>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cards;
