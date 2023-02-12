import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { PokemonsContext } from '../context/index';
import { mockPokemon } from './mocks/Pokemon';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Cards from '../components/Cards';
import { act } from 'react-dom/test-utils';


describe('Teste da Página Home', () => {
  const pokemon = mockPokemon;
  
  it('Deveria renderizar "Loading..." ao iniciar a página', () => {
    const { getByText } = render(
      <PokemonsContext.Provider value={{ isLoading: true,  pokemon }}>
        <Cards />
      </PokemonsContext.Provider>
    );
    
    expect(getByText('Loading...')).toBeInTheDocument();
  });
  
  it('Deveria renderizar os cards após a requisição da API', async () => {
    const { container, getByText } = render(
      <Router history={createBrowserHistory()}>
        <Cards />
      </Router>
    );
  
    await act(async () => {
      const pokemon = mockPokemon;
    
      await new Promise((resolve) => setTimeout(resolve, 0));
      render(
        <Router history={createBrowserHistory()}>
          <PokemonsContext.Provider value={{ isLoading: false, pokemon }}>
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
});
