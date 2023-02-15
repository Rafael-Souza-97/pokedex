import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { PokemonsContext } from '../context';
import { page1LoadingOff } from './mocks/APIMocks';
import About from '../pages/About';

const history = createMemoryHistory();

describe('Teste da página About', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it('Deveria renderizar o Header', async () => {
    const { getByTestId } = render(
      <Router history={history}>
        <PokemonsContext.Provider value={ page1LoadingOff }>
          <About />
        </PokemonsContext.Provider>
      </Router>,
    );
    waitFor(()=> {
      expect(getByTestId('header')).toBeInTheDocument();
    });
  });

  it('renders the heading correctly', () => {
    const { getByTestId } = render(
      <Router history={history}>
        <PokemonsContext.Provider value={ page1LoadingOff }>
          <About />
        </PokemonsContext.Provider>
      </Router>,
    );

    const { getByText } = render(
      <Router history={history}>
        <PokemonsContext.Provider value={ page1LoadingOff }>
          <About />
        </PokemonsContext.Provider>
      </Router>,
    );
    waitFor(() => {
      const heading = getByText('Sobre a Pokédex');
      expect(heading).toBeInTheDocument();
    }); 
  });
    
  it('Deveria renderizar as imagens corretamente', () => {
    const { getAllByAltText } = render( 
      <Router history={history}>
        <PokemonsContext.Provider value={ page1LoadingOff }>
          <About />
        </PokemonsContext.Provider>
      </Router>,
    );
    waitFor(() => {
      const images = getAllByAltText(/pokemon-left/);
      expect(images).toHaveLength(2);
    });
  });

  it('Deveria renderizar corretamente as informações de contato', () => {
    const { getByText } = render(
      <Router history={history}>
        <PokemonsContext.Provider value={ page1LoadingOff }>
          <About />
        </PokemonsContext.Provider>
      </Router>,
    );

    waitFor(() => {
      const email = getByText('Email');
      expect(email).toBeInTheDocument();

      const phone = getByText('(31) 9 8292-5233');
      expect(phone).toBeInTheDocument();

      const linkedin = getByText('LinkedIn');
      expect(linkedin).toBeInTheDocument();

      const github = getByText('GitHub');
      expect(github).toBeInTheDocument();

      const portfolio = getByText('Portfólio');
      expect(portfolio).toBeInTheDocument();
    });
  });
});
