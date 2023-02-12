import React, { ReactNode, useEffect, useState } from 'react';
import { PokemonsContext, IPokemon, IPokemonData, IPokemonDetail } from '.';
import { getPokemonData, getPokemonList } from '../services/FetchPokemons';

interface IProps {
  children: ReactNode;
}

export const PokemonsContextProvider = ({ children }: IProps) => {
  const [pokemon, setPokemon] = useState<IPokemon>({} as IPokemon);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getPokemonList(25);
      const promises = response.results.map(async (poke: IPokemonData) => {
        return await getPokemonData(poke.url);
      });
      const results = await Promise.all(promises);
      setPokemon({
        count: response.count,
        next: response.next,
        previous: response.previous,
        results: results as IPokemonDetail[],
      });
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <PokemonsContext.Provider value={{ isLoading, pokemon }}>
      {children}
    </PokemonsContext.Provider>
  );
};
