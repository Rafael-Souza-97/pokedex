import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoritesCards from '../components/FavoritesCards';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

describe('FavoritesCards', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('Deveria renderizar o card do pokemon favorito', async () => {
    localStorage.setItem('FavoritesPokemons', JSON.stringify(['1']));
    render(
      <Router history={history}>
        <FavoritesCards />
      </Router>
    );

    await waitFor(() => {
      const pokemonCards = screen.getAllByText('Bulbasaur');
      expect(pokemonCards.length).toBe(1);
    });
  });

  test('Deveria retornar uma mensagem caso não tenha pokemon favoritado', async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <FavoritesCards />
      </Router>
    );
  
    waitFor(() => {
      const noResultsMessage = screen.getByTestId('no-results');

      expect(noResultsMessage).toBeInTheDocument();
      expect(noResultsMessage).toHaveTextContent('Você ainda não possui um pokemon favorito');
    });
  });
});
