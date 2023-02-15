import { IPokemonContextData } from '../../context';
import { mockPokemon } from './Pokemon';

const filteredPokemon = mockPokemon;

export const valueLoadingOn = {
  searchResults: mockPokemon,
  isLoading: true,
  filteredPokemon,
  totalPages: 0,
  responseSearch: { count: 0, next: '', previous: '', results: []},
  page: { 
    page: 1,
    limit: 50,
    offset: 0
  },
  search: '',
  setPage: jest.fn(),
  setSearch: jest.fn(),
};

export const page1LoadingOff  = {
  isLoading: false,
  filteredPokemon,
  totalPages: 20,
  searchResults: mockPokemon,
  responseSearch: { count: 0, next: '', previous: '', results: []},
  page: { 
    page: 1,
    limit: 50,
    offset: 0
  },
  search: '',
  setPage: jest.fn(),
  setSearch: jest.fn(),
};

export const page2LoadingOff = {
  isLoading: false,
  filteredPokemon,
  searchResults: mockPokemon,
  responseSearch: { count: 0, next: '', previous: '', results: []},
  totalPages: 20,
  page: { 
    page: 2,
    limit: 50,
    offset: 50
  },
  search: '',
  setPage: jest.fn(),
  setSearch: jest.fn(),
};

export const emptyFilteredPokemonLoadingOff = {
  isLoading: false,
  filteredPokemon: {
    results: [],
    next: null,
    previous: null,
    count: 0
  },
  searchResults: {
    results: [],
    next: null,
    previous: null,
    count: 0
  },
  search: '',
  totalPages: 20,
  responseSearch: { count: 0, next: '', previous: '', results: []},
  page: {
    page: 1,
    limit: 0,
    offset: 0
  },
  setPage: jest.fn(),
  setSearch: jest.fn()
};

export const mockContextData: IPokemonContextData = {
  isLoading: false,
  filteredPokemon: mockPokemon,
  searchResults: mockPokemon,
  responseSearch: { count: 0, next: '', previous: '', results: []},
  search: '',
  totalPages: 1,
  page: { page: 1, limit: 10, offset: 0 },
  setPage: jest.fn(),
  setSearch: jest.fn(),
};

