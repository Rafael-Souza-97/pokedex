import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PokemonsContext } from '../context/index';
import { IPokemonDetail } from '../interfaces/IPokemonDetail';
import TypeBadge from './TypeBadge';
import '../styles/Card.css';

const Cards = () => {
  const { isLoading, pokemon } = useContext(PokemonsContext);

  if(!pokemon || !pokemon.results) return null;

  return (
    <div className="grid-container">

      { isLoading ? (
        <p>Loading...</p>
      ) : (
        pokemon.results.map((poke: IPokemonDetail, index) => (
          <Link
            to={`/pokemon/${poke.id}`}
            key={index}
            data-testid={`card-${index}`}
            style={{ textDecoration: 'none' }}
          >
            <div key={index} className="card" data-testid={`card-${index}`}>
              <div className='card-image-container'>
                <img src={poke.sprites.front_default} alt={poke.name} />
              </div>
              <p>Nº: {poke.id}</p>
              <h3>{poke.name[0].toUpperCase() + poke.name.substring(1)}</h3>
              <div className="types-container">
                {poke.types.map((type) => (
                  <TypeBadge key={type.type.name} type={type.type.name} />
                ))}
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Cards;
