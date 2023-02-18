import React, { ReactNode, useEffect, useState } from 'react';
import { PokemonsContext } from '.';
import ISearchPokemonData from '../interfaces/ISearchPokemonData';
import IPokemon from '../interfaces/IPokemon';
import IPokemonData from '../interfaces/IPokemonData';
import IPokemonDetail from '../interfaces/IPokemonDetail';
import { getFromLocalStorage, saveToLocalStorage } from '../services/LocalStorage';
import {
  getPokemonData,
  getPokemonList,
  getPokemonNameAndURL
} from '../services/FetchPokemons';

interface IProps {
  children: ReactNode;
}

const searchResultsInitial = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

const isDarkModeOnInitial = getFromLocalStorage('isDarkModeOn')|| false;

export const PokemonsContextProvider = ({ children }: IProps) => {
  const [filteredPokemon, setFilteredPokemon] = useState<IPokemon>({} as IPokemon);
  const [searchResults, setSearchResults] = useState<IPokemon>(searchResultsInitial as IPokemon);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState({ page: 1, limit: 50, offset: 0});
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');
  const [responseSearch, setResponseSearch] = useState({} as ISearchPokemonData);
  const [isDarkModeOn, setIsDarkModeOn] = useState(() => isDarkModeOnInitial) ;

  useEffect(() => {
    const fetchSearchPokemons = async () => {
      const response = await getPokemonNameAndURL();
      setResponseSearch(response);
    };
    fetchSearchPokemons();
  }, []);

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

    setIsLoading(false);
  };

  useEffect( () => {
    fetchData();
  }, [page]);

  const fetchSearchData = async () => {
    setIsLoading(true);
  
    if (responseSearch.results && responseSearch.results.length > 0) {
      const promises = responseSearch.results.map(async (poke) => {
        return await getPokemonData(poke.url);
      });
  
      const results = await Promise.all(promises);
  
      const filteredSearchResults = results.filter((pokemon) => pokemon.name.toLowerCase()
        .includes(search.toLowerCase()));
  
      setSearchResults({
        count: responseSearch.count,
        next: responseSearch.next,
        previous: responseSearch.previous,
        results: filteredSearchResults as IPokemonDetail[],
      });

      setIsLoading(false);
    } else {
      throw new Error('Algo deu errado');
    }
  };
  
  useEffect(() => {
    if (responseSearch.results) {
      fetchSearchData();
    }
  }, [search]);

  useEffect(() => {
    saveToLocalStorage('isDarkModeOn', isDarkModeOn);
  }, [isDarkModeOn]);

  return (
    <PokemonsContext.Provider value={{
      isLoading,
      filteredPokemon,
      totalPages,
      page,
      search,
      searchResults,
      responseSearch,
      isDarkModeOn,
      setIsDarkModeOn,
      setPage,
      setSearch
    }}>
      {children}
    </PokemonsContext.Provider>
  );
};
