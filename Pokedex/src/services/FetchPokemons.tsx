import axios from 'axios';

export const getPokemonList = async (limit: number) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    return response.data;
  } catch (error) {
    throw new Error(`Ocorreu um erro na requisição: ${error}`);
  }
};

export const getPokemonData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Ocorreu um erro na requisição: ${error}`);
  }
};