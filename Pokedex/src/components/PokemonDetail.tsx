import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPokemonDetail } from '../interfaces/IPokemonDetail';
import { getPokemonData } from '../services/FetchPokemons';
import TypeBadge from './TypeBadge';
import '../styles/PokemonDetail.css';
import Loading from './Loading';
import StatsBadge from './StatsBadge';

const PokemonDetail = () => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<IPokemonDetail | undefined>(undefined);
  const { id } = useParams<{ id: string }>();

  const DETAILS_URL = `https://pokeapi.co/api/v2/pokemon/${id}`;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const responseDetails = await getPokemonData(DETAILS_URL);
      setDetails(responseDetails);

      setLoading(false);
    }
    fetchData();
  }, [id]);
    
  if (loading) return <Loading />;

  return (
    <div className='pokemon-detail-container'>
      {details && (
        <div className='pokemon-detail-card-container' >
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
              className='pokemon-detail-image' />
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
