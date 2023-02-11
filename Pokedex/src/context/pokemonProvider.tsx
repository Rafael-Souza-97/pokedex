import React, {  ReactNode, useEffect, useState } from 'react';
import { PokemonsContext, IPokemon } from '.';
import { getPokemonList } from '../services/FetchPokemons';

interface IProps {
  children: ReactNode;
}

export const PokemonsContextProvider = ({ children }: IProps) => {
  const [pokemon, setPokemon] = useState<IPokemon>({} as IPokemon );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getPokemonList(25);
      setPokemon({ ...response });
      setIsLoading(false);
    }
    fetchData();
  }, []);

  console.log(pokemon);

  return (
    <PokemonsContext.Provider value={{ isLoading, pokemon }}>
      {children}
    </PokemonsContext.Provider>
  );
};