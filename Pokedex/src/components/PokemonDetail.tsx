import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPokemonDetail } from '../interfaces/IPokemonDetail';
import { getPokemonData } from '../services/FetchPokemons';

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
    <div>
      {details && (
        <div>
          <img src={details.sprites.front_default} alt={details.name} />
          <p>Nº: {details.id}</p>
          <h3>{details.name[0].toUpperCase() + details.name.substring(1)}</h3>
          <div>
            <p>Altura: {details.height / 10} m</p>
            <p>Peso: {details.weight / 10} kg</p>
          </div>
          <div>
            <h4>Tipos:</h4>
            {details.types.map((type) => (
              <p key={type.type.name}>{type.type.name}</p>
            ))}
          </div>
          <div>
            <h4>Habilidades:</h4>
            {details.abilities.map((ability) => (
              <p key={ability.ability.name}>{ability.ability.name}</p>
            ))}
          </div>
          <div>
            <h4>Estatísticas:</h4>
            {details.stats.map((stat) => (
              <p key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</p>
            ))}
          </div>
          <div>
            <h4>Movimentos:</h4>
            {details.moves.map((move) => (
              <p key={move.move.name}>{move.move.name}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetail;
