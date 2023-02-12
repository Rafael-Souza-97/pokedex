import React, { ReactNode, useEffect, useState } from 'react';
import { PokemonsContext, IPokemon, IPokemonData, IPokemonDetail } from '.';
import { getPokemonData, getPokemonList } from '../services/FetchPokemons';

interface IProps {
  children: ReactNode;
}

export const PokemonsContextProvider = ({ children }: IProps) => {
  const [pokemon, setPokemon] = useState<IPokemon>({} as IPokemon);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState({ page: 1, limit: 50, offset: 0});
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const { limit, offset } = page;
      
      setIsLoading(true);

      const response = await getPokemonList(limit, offset);
      let totalPage = Math.ceil(response.count / limit);
      if (totalPage > 20) totalPage = 20;
      setTotalPages(totalPage);

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
  }, [totalPages, page]);

  return (
    <PokemonsContext.Provider value={{ isLoading, pokemon, totalPages, page, setPage }}>
      {children}
    </PokemonsContext.Provider>
  );
};
