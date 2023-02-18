import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPokemonData } from '../services/FetchPokemons';
import { PokemonsContext } from '../context';
import { getFromLocalStorage } from '../services/LocalStorage';
import IPokemonDetail from '../interfaces/IPokemonDetail';
import Loading from './Loading';
import TypeBadge from './TypeBadge';
import sadPokemon from '../assets/sad-pokemon.png';
import '../styles/Cards.css';

function FavoritesCards() {
  const { isLoading } = useContext(PokemonsContext);
  const [favoriteIds, setFavoriteIds] = useState<IPokemonDetail[]>([]);

  if (isLoading) return <Loading />;

  const fetchURLFavoritePokemons = async () => {
    const favorites = getFromLocalStorage('FavoritesPokemons') || '[]';

    const favoritesData = favorites.map(async (pokemon: string) => {
      return await getPokemonData(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    });
    
    const results = await Promise.all(favoritesData);

    setFavoriteIds(results);
  };

  useEffect(() => {
    fetchURLFavoritePokemons();
  }, []);

  if (favoriteIds.length !== 0) {
    return (
      <div className="grid-container">
        { isLoading ? (
          <Loading />
        ) : (
          favoriteIds.map((poke: IPokemonDetail, index) => (
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
          ))
        )}
      </div>
    );
  } else {
    return (
      <div className='pokemon-search-no-results' data-testid='no-results'>
        <p>Você ainda não possui um pokemon favorito</p>
        <img src={sadPokemon} alt="sad pokemon" className='sad-pokemon-not-found'/>
      </div>
    );
  }
} 

export default FavoritesCards;
