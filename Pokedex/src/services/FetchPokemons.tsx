import axios from 'axios';

export const getPokemonList = async (limit: number, offset: number) => {
  try {
    const response = await axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
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

export const searchPokemon = async (pokemon: string) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw new Error(`Ocorreu um erro na requisição: ${error}`);
  }
};