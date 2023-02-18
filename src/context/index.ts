import { createContext } from 'react';
import IPage from '../interfaces/IPage';
import IPokemon from '../interfaces/IPokemon';
import ISearchPokemonData from '../interfaces/ISearchPokemonData';

export interface IPokemonContextData {
  filteredPokemon: IPokemon;
  searchResults: IPokemon;
  responseSearch: ISearchPokemonData;
  isLoading: boolean;
  totalPages: number;
  page: IPage;
  search: string;
  isDarkModeOn: boolean;
  setIsDarkModeOn: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<{
    page: number;
    limit: number;
    offset: number;
  }>>
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const PokemonsContext = createContext<IPokemonContextData>({} as IPokemonContextData);
