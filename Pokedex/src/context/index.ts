import { createContext } from 'react';

export interface IPokemon {
  count: number;
  next: string | null;
  previous: string | null;
  results: [];
}

export interface IPokemonData {
  pokemon: IPokemon;
  isLoading: boolean;
}


export const PokemonsContext = createContext<IPokemonData>({} as IPokemonData);
