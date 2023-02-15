type Pokemon = {
  name: string;
  imageUrl: string;
  id: number;
};

type FavoritePokemons = {
  [id: string]: Pokemon;
};

const getPokemonImageUrl = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const fetchPokemon = async (id: number): Promise<Pokemon> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  const pokemon = {
    name: data.name,
    imageUrl: getPokemonImageUrl(data.id),
    id: data.id,
  };
  return pokemon;
};

const favoritePokemons: FavoritePokemons = {};

export const saveFavoritePokemon = (pokemon: Pokemon) => {
  favoritePokemons[pokemon.id] = pokemon;
};

export const removeFavoritePokemon = (pokemon: Pokemon) => {
  delete favoritePokemons[pokemon.id];
};

export const getPokemonById = async (id: number): Promise<Pokemon> => {
  let pokemon: Pokemon;

  try {
    pokemon = await fetchPokemon(id);
  } catch (error) {
    throw new Error(`Could not find a Pokémon with id ${id}`);
  }

  return pokemon;
};

export const getFavoritePokemons = (): Pokemon[] => {
  const favoritePokemonsArray: Pokemon[] = [];

  for (const key in favoritePokemons) {
    favoritePokemonsArray.push(favoritePokemons[key]);
  }

  return favoritePokemonsArray;
};
