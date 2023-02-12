import React from 'react';
import { render } from '@testing-library/react';
import { PokemonsContext } from '../context/index';
import Cards from '../components/Cards';
import { mockPokemon } from './mocks/Pokemon';
import '@testing-library/jest-dom/extend-expect';
// import { Router } from 'react-router-dom';
// import { createBrowserHistory } from 'history';


describe('Teste Home', () => {
  const pokemon = mockPokemon;

  it('Deveria renderizar "Loading..." ao iniciar a página', () => {
    const { getByText } = render(
      <PokemonsContext.Provider value={{ isLoading: true,  pokemon }}>
        <Cards />
      </PokemonsContext.Provider>
    );

    expect(getByText('Loading...')).toBeInTheDocument();
  });

  // it('Deveria renderizar os cards após a requisição da API', async () => {
  //   render(
  //     <Router history={createBrowserHistory()}>
  //       <Cards />
  //     </Router>
  //   );

  //   const card = await waitFor(() => screen.getByTestId('card-0'));
  //   const name = screen.getByText('Bulbasaur');

  //   expect(card).toBeInTheDocument();
  //   expect(name).toBeInTheDocument();
  // });
});
