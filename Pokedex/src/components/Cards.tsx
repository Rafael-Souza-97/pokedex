import React, { useContext } from 'react';
import { PokemonsContext } from '../context';

interface IPokemon {
  name: string;
  url: string;
}

function Cards() {
  const { pokemons } = useContext(PokemonsContext);
  const { results } = pokemons.pokemons;

  return (
    <div>
      {results.map((pokemon: IPokemon, index) => (
        <div key={index}>
          <h2>{pokemon.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Cards;
