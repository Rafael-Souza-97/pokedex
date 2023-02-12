import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PokemonsContextProvider } from '../src/context/pokemonProvider';
import Home from './pages/Home';
import PokemonDetail from './pages/PokemonDetail';
import Comparison from './pages/Comparison';
import Favorites from './pages/Favorites';
import About from './pages/About';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <PokemonsContextProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/pokemon/:id' component={PokemonDetail} /> 
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/comparison" component={Comparison} />
        <Route exact path="/about" component={About} />
      </Switch>
    </PokemonsContextProvider>
  </BrowserRouter>
);
