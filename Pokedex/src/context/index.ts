import { createContext } from 'react';

export interface IPokemonData {
  name: string;
  url: string;
}

export interface IPokemon {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemonDetail[];
}

export interface IPokemonDetail {
  abilities: Array<{
    ability: { name: string; url: string };
    is_hidden: boolean;
    slot: number;
  }>;
  base_experience: number;
  forms: Array<{
    name: string;
    url: string;
  }>;
  game_indices: Array<{
    game_index: number;
    version: { name: string; url: string };
  }>;
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<{
    move: { name: string; url: string };
    version_group_details: Array<{
      level_learned_at: number;
      move_learn_method: { name: string; url: string };
      version_group: { name: string; url: string };
    }>;
  }>;
  name: string;
  order: number;
  past_types: [];
  species: { name: string; url: string };
  sprites: {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
  };
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }>;
  types: Array<{
    slot: number;
    type: { name: string; url: string };
  }>;
  weight: number;
}

export interface IPage { 
  page: number,
  limit: number,
  offset: number
} 

export interface IPokemonContextData {
  filteredPokemon: IPokemon;
  searchResults: IPokemon;
  isLoading: boolean;
  totalPages: number;
  page: IPage;
  search: string;
  setPage: React.Dispatch<React.SetStateAction<{
    page: number;
    limit: number;
    offset: number;
  }>>
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}


export const PokemonsContext = createContext<IPokemonContextData>({} as IPokemonContextData);
