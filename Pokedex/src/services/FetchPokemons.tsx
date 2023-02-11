const endpoint = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemonData = async () => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    window.alert(`Ocorreu um erro: ${error}`);
  }
};
