import React, { ReactNode, useEffect, useState } from 'react';
import { PokemonsContext, IPokemon, IPokemonData, IPokemonDetail } from '.';
import { getPokemonData, getPokemonList } from '../services/FetchPokemons';

interface IProps {
  children: ReactNode;
}
export const PokemonsContextProvider = ({ children }: IProps) => {
  const [filteredPokemon, setFilteredPokemon] = useState<IPokemon>({} as IPokemon);
  const [searchResults, setSearchResults] = useState<IPokemon>({} as IPokemon);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState({ page: 1, limit: 50, offset: 0});
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');


  const fetchSearchData = async () => {

    const response = await getPokemonList(500, 0);

    const promises = response.results.map(async (poke: IPokemonData) => {
      return await getPokemonData(poke.url);
    });

    const results = await Promise.all(promises);

    const filteredSearchResults = results.filter((pokemon) => pokemon.name.toLowerCase()
      .includes(search.toLowerCase()));

    setSearchResults({
      count: response.count,
      next: response.next,
      previous: response.previous,
      results: filteredSearchResults as IPokemonDetail[],
    });
  };

  const fetchData = async () => {
    const { limit, offset } = page;
  

    const response = await getPokemonList(limit, offset);

    let totalPage = Math.ceil(response.count / limit);
    if (totalPage > 20) totalPage = 20;
    setTotalPages(totalPage);

    const promises = response.results.map(async (poke: IPokemonData) => {
      return await getPokemonData(poke.url);
    });

    const results = await Promise.all(promises);

    setFilteredPokemon({
      count: response.count,
      next: response.next,
      previous: response.previous,
      results: results as IPokemonDetail[],
    });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    fetchSearchData();
    setIsLoading(false);
  }, [page, search]);


  return (
    <PokemonsContext.Provider value={{
      isLoading,
      filteredPokemon,
      totalPages,
      page,
      search,
      searchResults,
      setPage,
      setSearch
    }}>
      {children}
    </PokemonsContext.Provider>
  );
};
