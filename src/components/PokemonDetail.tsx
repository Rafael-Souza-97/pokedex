import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonData } from '../services/FetchPokemons';
import IPokemonDetail from '../interfaces/IPokemonDetail';
import Loading from './Loading';
import TypeBadge from './TypeBadge';
import StatsBadge from './StatsBadge';
import unfavoriteHeart from '../assets/unfavorite.png';
import favoriteHeart from '../assets/favorite.png';
import '../styles/PokemonDetail.css';

const PokemonDetail = () => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<IPokemonDetail | undefined>(undefined);
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams<{ id: string }>();
  const DETAILS_URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const FAVORITES_KEY = 'FavoritesPokemons';

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  function setFavoritesPokemons() {
    const favorites = localStorage.getItem('FavoritesPokemons');
    if (!favorites || favorites === '') {
      localStorage.setItem('FavoritesPokemons', JSON.stringify([]));
    }
  }

  const checkIsFavorite = (id: string): void => {
    const favorites: string[] = JSON.parse(localStorage.getItem('FavoritesPokemons') || '[]');
    setIsFavorite(favorites.includes(id));
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setFavoritesPokemons();

      const responseDetails = await getPokemonData(DETAILS_URL);
      setDetails(responseDetails);

      setLoading(false);
    }
  
    fetchData();
    
    checkIsFavorite(id);
  }, [id]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
  
    if (isFavorite) {
      if (!favorites.includes(id)) {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites, id]));
      }
    } else {
      const updatedFavorites = favorites.filter((favoriteId: string) => favoriteId !== id);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
    }
  }, [isFavorite]);

  if (loading) return <Loading />;

  return (
    <div className='pokemon-detail-container'>
      {details && (
        <div className='pokemon-detail-card-container' >
          <div className='favorite-container'>
            <button onClick={toggleFavorite} className="hearts">
              {isFavorite
                ? <img src={favoriteHeart} alt="Favorite" />
                : <img src={unfavoriteHeart} alt="Unfavorite" />
              }
            </button>
          </div>

          <div className='pokemon-detail-container-image'>
            <p className='pokemon-detail-id'>Nº: {details.id}</p>
          
            <h3 className='pokemon-detail-title'>
              {details.name[0].toUpperCase() + details.name.substring(1)}
            </h3>

            <div className='pokemon-detail-types'>
              {details.types.map((type) => (
                <TypeBadge key={type.type.name} type={type.type.name} />
              ))}
            </div>
  
            <img
              src={details.sprites.front_default}
              alt={details.name}
              className='pokemon-detail-image'
              data-testid={'pokemon-image'}
            />
          </div>
              
          <div className='pokemon-detail-height-weight-container'>
            <div className='pokemon-detail-height-weight'>
  
              <div className='pokemon-detail-height'>
                <div>
                  <p><strong>Altura</strong></p>
                </div>
  
                <div className='heigth-value'>
                  {details.height / 10 + ' m'}
                </div>
              </div>
    
              <div className='pokemon-detail-weight'>
                <div>
                  <p><strong>Peso</strong></p>
                </div>
  
                <div className='weigth-value'>
                  {details.weight / 10 + ' kg'}
                </div>

              </div>
            </div>

            <div className='pokemon-detail-skills'>
              <div className='skills-title'>
                <p><strong>Habilidades</strong></p>
              </div>

              <div className='skills-values'>
                {details.abilities.map((ability) => (
                  <p key={ability.ability.name}>{ability.ability.name}</p>
                ))}
              </div>
            </div>
          </div>

          <div className='pokemon-detail-stats'>
            <h4>Estatísticas</h4>
            <div className='stats-container'>
              {details.stats.map((stat) => (
                <div key={stat.stat.name} className='stats-details'>
                  <div className='pokemon-stats-name'>
                    <StatsBadge
                      key={stat.stat.name}
                      text={stat.stat.name}
                    />
                  </div>
                  <div className='pokemon-stats-number'>
                    {stat.base_stat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetail;
