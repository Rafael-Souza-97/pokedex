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

export const getPokemonNameAndURL = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
    return response.data;
  } catch (error) {
    throw new Error(`Ocorreu um erro na requisição: ${error}`);
  }
};
