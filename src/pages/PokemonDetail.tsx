import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PokemonDetails from '../components/PokemonDetail';

function PokemonDetail() {
  return (
    <div className='pokemon-details-page'>
      <Header />
      <PokemonDetails />
      <Footer />
    </div>
  );
}

export default PokemonDetail;