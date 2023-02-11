import React, {  ReactNode, useEffect, useState } from 'react';
import { INITIAL_STATE, PokemonsContext } from '.';
import { getPokemonData } from '../services/FetchPokemons';

interface IProps {
  children: ReactNode;
}

interface IPokemonData {
  count: number;
  next: string;
  previous: string | null;
  results: Array<{ name: string, url: string }>;
}

export const PokemonsContextProvider = ({ children }: IProps) => {
  const [pokemons, setPokemons] = useState(INITIAL_STATE);

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemonData();
      setPokemons({ ...pokemons, pokemons: data });
    }
    fetchData();
  }, []);

  return (
    <PokemonsContext.Provider value={{ pokemons }}>
      {children}
    </PokemonsContext.Provider>
  );
};
