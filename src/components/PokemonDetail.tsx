import React, { useContext, useEffect, useState } from 'react';
import { PokemonsContext } from '../context';
import { useParams } from 'react-router-dom';
import { getPokemonData } from '../services/FetchPokemons';
import { getFromLocalStorage, saveToLocalStorage } from '../services/LocalStorage';
import IPokemonDetail from '../interfaces/IPokemonDetail';
import Loading from './Loading';
import TypeBadge from './TypeBadge';
import StatsBadge from './StatsBadge';
import unfavoriteHeart from '../assets/unfavorite.png';
import favoriteHeart from '../assets/favorite.png';
import '../styles/Dark-Mode/PokemonDetail-Dark.css';
import '../styles/PokemonDetail.css';

const PokemonDetail = () => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<IPokemonDetail | undefined>(undefined);
  const [isFavorite, setIsFavorite] = useState(false);
  const { isDarkModeOn } = useContext(PokemonsContext);

  const { id } = useParams<{ id: string }>();

  const DETAILS_URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const FAVORITES_KEY = 'FavoritesPokemons';

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  function setFavoritesPokemons() {
    const favorites = getFromLocalStorage('FavoritesPokemons');
  
    if (!favorites || favorites === '') {
      saveToLocalStorage('FavoritesPokemons', []);
    }
  }

  const checkIsFavorite = (id: string): void => {
    const favorites: string[] = getFromLocalStorage('FavoritesPokemons') || '[]';
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
        saveToLocalStorage(FAVORITES_KEY, [...favorites, id]);
      }
    } else {
      const updatedFavorites = favorites.filter((favoriteId: string) => favoriteId !== id);
      saveToLocalStorage(FAVORITES_KEY, updatedFavorites);
    }
  }, [isFavorite]);

  useEffect(() => { 
    if (isDarkModeOn) { 
      document.body.classList.add('dark-mode');
    } else { 
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkModeOn]);

  if (loading) return <Loading />;

  return (
    <div className={ 
      isDarkModeOn ? 'pokemon-detail-container dark-mode' : 'pokemon-detail-container'
    }>
      { details && (
        <div className={
          isDarkModeOn ? 'pokemon-detail-card-container dark-mode' : 'pokemon-detail-card-container'
        }>
          <div className={
            isDarkModeOn ? 'favorite-container dark-mode' : 'favorite-container'
          }>
            <button onClick={ toggleFavorite } className={
              isDarkModeOn ? 'hearts dark-mode' : 'hearts'
            }>
              { isFavorite
                ? <img
                  src={ favoriteHeart }
                  alt="favorite"
                  className={
                    isDarkModeOn ? 'favorite-heart dark-mode' : 'favorite-heart'
                  }/>
                : <img
                  src={ unfavoriteHeart }
                  alt="unfavorite"
                  className={
                    isDarkModeOn ? 'unfavorite-heart dark-mode' : 'unfavorite-heart'
                  }/>
              }
            </button>
          </div>

          <div className={
            isDarkModeOn ? 
              'pokemon-detail-container-image dark-mode' : 'pokemon-detail-container-image'
          }>
            <p className={
              isDarkModeOn ? 'pokemon-detail-id dark-mode' : 'pokemon-detail-id'
            }>Nº: { details.id }</p>
          
            <h3 className={
              isDarkModeOn ? 'pokemon-detail-title dark-mode' : 'pokemon-detail-title'
            }>
              { details.name[0].toUpperCase() + details.name.substring(1) }
            </h3>

            <div className={
              isDarkModeOn ? 'pokemon-detail-types dark-mode' : 'pokemon-detail-types'
            }>
              { details.types.map((type) => (
                <TypeBadge key={ type.type.name } type={ type.type.name } />
              ))}
            </div>
  
            <img
              src={details.sprites.front_default}
              alt={details.name}
              data-testid={'pokemon-image'}
              className={
                isDarkModeOn ? 'pokemon-detail-image dark-mode' : 'pokemon-detail-image'
              }/>
          </div>
              
          <div className={
            isDarkModeOn ? 
              'pokemon-detail-height-weight-container dark-mode' : 
              'pokemon-detail-height-weight-container'
          }>
            <div className={
              isDarkModeOn ? 
                'pokemon-detail-height-weight dark-mode' : 'pokemon-detail-height-weight'
            }>
  
              <div className={
                isDarkModeOn ? 'pokemon-detail-height dark-mode' : 'pokemon-detail-height'
              }>
                <div>
                  <p><strong>Altura</strong></p>
                </div>
  
                <div className={
                  isDarkModeOn ? 'heigth-value dark-mode' : 'heigth-value'
                }>
                  { details.height / 10 + ' m' }
                </div>
              </div>
    
              <div className={
                isDarkModeOn ? 'pokemon-detail-weight dark-mode' : 'pokemon-detail-weight'
              }>
                <div>
                  <p><strong>Peso</strong></p>
                </div>
  
                <div className={
                  isDarkModeOn ? 'weigth-value dark-mode' : 'weigth-value'
                }>
                  { details.weight / 10 + ' kg' }
                </div>

              </div>
            </div>

            <div className='pokemon-detail-skills'>
              <div className='skills-title'>
                <p><strong>Habilidades</strong></p>
              </div>

              <div className={
                isDarkModeOn ? 'skills-values dark-mode' : 'skills-values'
              }>
                { details.abilities.map((ability) => (
                  <p key={ ability.ability.name }>{ ability.ability.name }</p>
                ))}
              </div>
            </div>
          </div>

          <div className={
            isDarkModeOn ? 'pokemon-detail-stats dark-mode' : 'pokemon-detail-stats'
          }>
            <h4>Estatísticas</h4>
            <div className={
              isDarkModeOn ? 'stats-container dark-mode' : 'stats-container'
            }>
              {details.stats.map((stat) => (
                <div key={ stat.stat.name } className={
                  isDarkModeOn ? 'stats-details dark-mode' : 'stats-details'
                }>
                  <div className={
                    isDarkModeOn ? 'pokemon-stats-name dark-mode' : 'pokemon-stats-name'
                  }>
                    <StatsBadge
                      key={ stat.stat.name }
                      text={ stat.stat.name }
                    />
                  </div>
                  <div className={
                    isDarkModeOn ? 'pokemon-stats-number dark-mode' : 'pokemon-stats-number'
                  }>
                    { stat.base_stat }
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
