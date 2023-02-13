import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { IPokemonContextData, PokemonsContext } from '../context/index';
import { mockPokemon } from './mocks/Pokemon';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { act } from 'react-dom/test-utils';
import Home from '../pages/Home';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import Cards from '../components/Cards';

const history = createBrowserHistory();

const filteredPokemon = mockPokemon;

const valueLoadingOn = {
  searchResults: mockPokemon,
  isLoading: true,
  filteredPokemon,
  totalPages: 0,
  page: { 
    page: 1,
    limit: 50,
    offset: 0
  },
  search: '',
  setPage: jest.fn(),
  setSearch: jest.fn(),
};

const page1LoadingOff  = {
  isLoading: false,
  filteredPokemon,
  totalPages: 20,
  searchResults: mockPokemon,
  page: { 
    page: 1,
    limit: 50,
    offset: 0
  },
  search: '',
  setPage: jest.fn(),
  setSearch: jest.fn(),
};

const page2LoadingOff = {
  isLoading: false,
  filteredPokemon,
  searchResults: mockPokemon,
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

const emptyFilteredPokemonLoadingOff = {
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
  page: {
    page: 1,
    limit: 0,
    offset: 0
  },
  setPage: jest.fn(),
  setSearch: jest.fn()
};

const mockContextData: IPokemonContextData = {
  isLoading: false,
  filteredPokemon: mockPokemon,
  searchResults: mockPokemon,
  search: '',
  totalPages: 1,
  page: { page: 1, limit: 10, offset: 0 },
  setPage: jest.fn(),
  setSearch: jest.fn(),
};

describe('Teste da Página Home', () => {
  afterEach(cleanup);

  it('Deveria renderizar o componente Loading ao fazer requisição à API', () => {
    const { getByTestId } = render(
      <PokemonsContext.Provider value={valueLoadingOn}>
        <Cards />
      </PokemonsContext.Provider>
    );
    
    expect(getByTestId('loading-logo')).toBeInTheDocument();
  });
  
  it('Deveria renderizar os cards após a requisição da API', async () => {
    const { container, getByText } = render(
      <Router history={history}>
        <Cards />
      </Router>
    );
  
    await act(async () => {   
      await new Promise((resolve) => setTimeout(resolve, 0));
      render(
        <Router history={history}>
          <PokemonsContext.Provider value={page2LoadingOff }>
            <Cards />
          </PokemonsContext.Provider>,
        </Router>,
        { container }
      );
    });
  
    const card = screen.getByTestId('card-0');
    const name = getByText('Bulbasaur');
  
    expect(card).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  it('Devia renderizar a Search Bar', () => {
    const { getByTestId } = render(
      <Router history={history}>
        <PokemonsContext.Provider value={page1LoadingOff }>
          <Home />
        </PokemonsContext.Provider>
      </Router>,
    );
    
    expect(getByTestId('search-bar')).toBeInTheDocument();
  });

  it('Deveria retornar o card do pokemon de acordo com o valor do input', async () => {
    const { getByPlaceholderText } = render(
      <PokemonsContext.Provider value={page1LoadingOff }>
        <SearchBar />
      </PokemonsContext.Provider>
    );
    const { container, getByText } = render(
      <Router history={history}>
        <Cards />
      </Router>
    );
  
    await act(async () => {   
      await new Promise((resolve) => setTimeout(resolve, 0));
      render(
        <Router history={history}>
          <PokemonsContext.Provider value={page1LoadingOff }>
            <Cards />
          </PokemonsContext.Provider>,
        </Router>,
        { container }
      );
    });
  
    const input = getByPlaceholderText('Pesquise por um Pokémon');
    fireEvent.change(input, { target: { value: 'bulbasaur' } });
  
    const card = screen.getByTestId('card-0');
    const name = getByText('Bulbasaur');
  
    expect(card).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
  
  it('Deveria mostrar uma mensagem caso não encontre nenhum pokemon', async () => {
    const { getByTestId } = render(
      <Router history={history}>
        <PokemonsContext.Provider value={ emptyFilteredPokemonLoadingOff }>
          <Home />
        </PokemonsContext.Provider>
      </Router>,
    );
  
    fireEvent.change(getByTestId('search-bar'), {
      target: { value: 'testeteste' },
    });
  
    setTimeout(() => {
      expect(getByTestId('no-results')).toBeInTheDocument();
    }, 2000);
  });

  it('Deveria renderizar o componente de Paginação', () => {
    const { getByTestId } = render(
      <Router history={history}>
        <PokemonsContext.Provider value={page1LoadingOff }>
          <Pagination />
        </PokemonsContext.Provider>
      </Router>
    );

    expect(getByTestId('pagination')).toBeInTheDocument();
  });

  it('Deveria mudar de página ao clicar no botão de paginação direito', () => {

    const { getByTestId } = render(
      <Router history={history}>
        <PokemonsContext.Provider value={page1LoadingOff}>
          <Pagination />
        </PokemonsContext.Provider>
      </Router>
    );
    fireEvent.click(getByTestId('right-button'));
    expect(page1LoadingOff.setPage).toHaveBeenCalledWith({
      page: 2,
      limit: 50,
      offset: 50
    });
  });

  it('Deveria mudar de página ao clicar no botão de paginação esquerdo', () => {
    const { getByTestId } = render(
      <Router history={createBrowserHistory()}>
        <PokemonsContext.Provider value={page2LoadingOff}>
          <Pagination />
        </PokemonsContext.Provider>
      </Router>
    );
    fireEvent.click(getByTestId('left-button'));
    expect(page2LoadingOff.setPage).toHaveBeenCalledWith({
      page: 1,
      limit: 50,
      offset: 0
    });
  });

  it('Deveria renderizar a quantidade de páginas/total de páginas corretamente', () => {
    const { getByTestId } = render(
      <Router history={history}>
        <PokemonsContext.Provider value={page2LoadingOff}>
          <Pagination />
        </PokemonsContext.Provider>
      </Router>
    );
  
    expect(getByTestId('pagination-text').textContent).toBe('2 de 20');
  });

  it('Deveria redirecionar para a página de detalhes do pokemon ao clicar no card', () => {
    const { getByTestId } = render(
      <Router history={history}>
        <PokemonsContext.Provider value={mockContextData}>
          <Home />
        </PokemonsContext.Provider>
      </Router>
    );

    const card = getByTestId('card-0');
    fireEvent.click(card);

    expect(window.location.pathname).toBe('/pokemon/1');
  });
});
