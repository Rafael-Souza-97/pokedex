import React from 'react';
import Header from '../components/Header';
import PokemonDetails from '../components/PokemonDetail';

function PokemonDetail() {
  return (
    <div className='pokemon-details-page'>
      <Header />
      <PokemonDetails />
    </div>
  );
}

export default PokemonDetail;