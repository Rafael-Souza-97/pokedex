import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';
import { PokemonsContextProvider } from '../src/context/pokemonProvider';
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <PokemonsContextProvider>
      <Route exact path="/" component={Home} />
    </PokemonsContextProvider>
  </BrowserRouter>
);
