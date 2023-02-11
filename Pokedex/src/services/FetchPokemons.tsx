import axios from 'axios';

export const getPokemonList = async (limit: number) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw new Error(`Ocorreu um erro na requisição: ${error}`);
  }
};
