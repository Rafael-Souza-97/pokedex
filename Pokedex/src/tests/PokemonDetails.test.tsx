import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import PokemonDetail from '../pages/PokemonDetail';
import { mockPokemonData } from './mocks/Pokemon';

jest.mock('../services/FetchPokemons', () => ({
  getPokemonData: jest.fn(() => Promise.resolve(mockPokemonData)),
}));

describe('Teste da Página dos Detalhes do Pokemon', () => {
  it('Deveria renderizar o Pokemon e seus atributos', async () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter initialEntries={['/1']}>
        <Route path='pokemon/:id'>
          <PokemonDetail />
        </Route>
      </MemoryRouter>
    );
    waitFor(() => {
      expect(getByText(/Nº:/i)).toBeInTheDocument();
      expect(getByText(/Bulbasaur/i)).toBeInTheDocument();
      expect(getByAltText(/Bulbasaur/i)).toBeInTheDocument();
      expect(getByText(/grass/i)).toBeInTheDocument();
      expect(getByText(/poison/i)).toBeInTheDocument();
      expect(getByText(/0.7 m/i)).toBeInTheDocument();
      expect(getByText(/6.9 kg/i)).toBeInTheDocument();
      expect(getByText(/chlorophyll/i)).toBeInTheDocument();
      expect(getByText(/hp/i)).toBeInTheDocument();
      expect(getByText(/45/i)).toBeInTheDocument();
      expect(getByText(/attack/i)).toBeInTheDocument();
      expect(getByText(/49/i)).toBeInTheDocument();
      expect(getByText(/defense/i)).toBeInTheDocument();
      expect(getByText(/49/i)).toBeInTheDocument();
      expect(getByText(/special-attack/i)).toBeInTheDocument();
      expect(getByText(/65/i)).toBeInTheDocument();
      expect(getByText(/special-defense/i)).toBeInTheDocument();
      expect(getByText(/65/i)).toBeInTheDocument();
      expect(getByText(/speed/i)).toBeInTheDocument();
      expect(getByText(/45/i)).toBeInTheDocument();
    });
  });
});
