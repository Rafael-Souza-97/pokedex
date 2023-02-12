import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';
import { PokemonsContextProvider } from '../src/context/pokemonProvider';
import Home from './pages/Home';
import PokemonDetail from './pages/PokemonDetail';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <PokemonsContextProvider>
      <Route exact path="/" component={Home} />
      <Route exact path="/pokemon/:id" component={PokemonDetail} />
    </PokemonsContextProvider>
  </BrowserRouter>
);
