import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import PokemonDetail from '../pages/PokemonDetail';

const mockPokemon = {
  id: 1,
  name: 'bulbasaur',
  types: [
    { type: { name: 'grass' } },
    { type: { name: 'poison' } },
  ],
  sprites: { front_default: 'bulbasaur.png' },
  height: 7,
  weight: 69,
  abilities: [{ ability: { name: 'chlorophyll' } }],
  stats: [
    { stat: { name: 'hp' }, base_stat: 45 },
    { stat: { name: 'attack' }, base_stat: 49 },
    { stat: { name: 'defense' }, base_stat: 49 },
    { stat: { name: 'special-attack' }, base_stat: 65 },
    { stat: { name: 'special-defense' }, base_stat: 65 },
    { stat: { name: 'speed' }, base_stat: 45 },
  ],
};

jest.mock('../services/FetchPokemons', () => ({
  getPokemonData: jest.fn(() => Promise.resolve(mockPokemon)),
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
