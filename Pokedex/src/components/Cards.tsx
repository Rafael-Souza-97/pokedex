import React, { useContext } from 'react';
import { PokemonsContext } from '../context';
import '../styles/Card.css';

interface IPokemon {
  name: string;
  url: string;
}

const Cards = () => {
  const { pokemon, isLoading } = useContext(PokemonsContext);

  if (!pokemon || !pokemon.results) return null;

  const { results } = pokemon;

  return (
    <div className='card-container'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        results.map((pokemon: IPokemon, index) => (
          <div key={ index } className='card'>
            <h2 className='pokemon-name'>{ pokemon.name }</h2>
          </div>
        ))
      )}
    </div>
  );
};
export default Cards;