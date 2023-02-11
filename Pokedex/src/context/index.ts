import { createContext } from 'react';

export const INITIAL_STATE = { 
  pokemons: {
    count: 0, next: null, previous: null, results: []
  }
};

export const PokemonsContext = createContext({ pokemons: INITIAL_STATE });