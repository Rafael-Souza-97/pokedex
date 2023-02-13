import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPokemonDetail } from '../interfaces/IPokemonDetail';
import { getPokemonData } from '../services/FetchPokemons';
import TypeBadge from './TypeBadge';
import '../styles/PokemonDetail.css';

const PokemonDetail = () => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<IPokemonDetail | undefined>(undefined);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await getPokemonData(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setDetails(response);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className='pokemon-detail-container'>
      {details && (
        <div className='pokemon-detail-card-container' >
          <div className='pokemon-detail-container-image'>
            <h3 className='pokemon-detail-title'>
              {details.name[0].toUpperCase() + details.name.substring(1)}
            </h3>
            <img
              src={details.sprites.front_default}
              alt={details.name}
              className='pokemon-detail-image' />

            <p className='pokemon-detail-id'>Nº: {details.id}</p>
          </div>

          <div className='pokemon-detail-height-weight'>
            <div>
              <p>Altura: {details.height / 10} m</p>
              <p>Peso: {details.weight / 10} kg</p>
            </div>

            <div className='pokemon-detail-types'>
              <h4>Tipos:</h4>
              {details.types.map((type) => (
                <p key={type.type.name}>{type.type.name}</p>
              ))}
            </div>

            <div className='pokemon-detail-skills'>
              <h4>Habilidades:</h4>
      
              {details.abilities.map((ability) => (
                <p key={ability.ability.name}>{ability.ability.name}</p>
              ))}
            </div>

            <div className='pokemon-detail-stats'>
              <h4>Estatísticas:</h4>
              {details.stats.map((stat) => (
                <TypeBadge key={stat.stat.name} type={stat.stat.name} />
              ))}
            </div>

            {/* <div className='pokemon-detail-moves'>
              <h4>Movimentos:</h4>
              <table>
                <thead>
                  <tr>
                  </tr>
                </thead>
                <tbody>
                  {details.moves.map((move) => (
                    <tr key={move.move.name}>
                      <td>{move.move.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetail;
