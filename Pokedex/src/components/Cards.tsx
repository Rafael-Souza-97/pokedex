import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PokemonsContext } from '../context/index';
import { IPokemonDetail } from '../interfaces/IPokemonDetail';
import TypeBadge from './TypeBadge';
import '../styles/Card.css';
import Loading from './Loading';

const Cards = () => {
  const { isLoading, filteredPokemon } = useContext(PokemonsContext);

  if(!filteredPokemon || !filteredPokemon.results) return null;

  return (
    <div className="grid-container">
      { isLoading ? (
        <Loading />
      ) : (
        filteredPokemon.results.length === 0 ? (
          <div className='pokemon-search-no-results'>
            <h2>Desculpe, nenhum pokemon foi encontrado com o nome informado 🙁</h2>
          </div>
        ) : (
          filteredPokemon.results.map((poke: IPokemonDetail, index) => (
            <Link
              to={`/pokemon/${poke.id}`}
              key={index}
              style={{ textDecoration: 'none' }}
            >
              <div key={index} className="card" data-testid={`card-${index}`}>
                <div className='card-image-container'>
                  <img
                    src={poke.sprites.front_default}
                    alt={poke.name}
                    className='card-pokemon-image'
                  />
                </div>

                <p>Nº: {poke.id}</p>

                <h2>{poke.name[0].toUpperCase() + poke.name.substring(1)}</h2>

                <div className="types-container">
                  {poke.types.map((type) => (
                    <TypeBadge key={type.type.name} type={type.type.name} />
                  ))}
                </div>
              </div>
            </Link>
          )))
      )}
    </div>
  );
};

export default Cards;
