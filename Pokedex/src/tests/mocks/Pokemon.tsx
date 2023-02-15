import IPokemon from '../../interfaces/IPokemon';

export const mockPokemon: IPokemon = {
  count: 1,
  next: null,
  previous: null,
  results: [
    {
      abilities: [
        {
          ability: { name: 'overgrow', url: 'https://pokeapi.co/api/v2/ability/65/' },
          is_hidden: false,
          slot: 1,
        },
      ],
      base_experience: 64,
      forms: [
        {
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon-form/1/',
        },
      ],
      game_indices: [
        {
          game_index: 1,
          version: { name: 'red', url: 'https://pokeapi.co/api/v2/version/1/' },
        },
      ],
      height: 7,
      held_items: [],
      id: 1,
      is_default: true,
      location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
      moves: [
        {
          move: { name: 'razor-leaf', url: 'https://pokeapi.co/api/v2/move/75/' },
          version_group_details: [
            {
              level_learned_at: 34,
              move_learn_method: 
              { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
              version_group: 
              { name: 'red-blue', url: 'https://pokeapi.co/api/v2/version-group/1/' },
            },
          ],
        },
      ],
      name: 'bulbasaur',
      order: 1,
      past_types: [],
      species: { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-species/1/' },
      sprites: {
        back_default: 
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
        back_female: null,
        back_shiny: 
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
        back_shiny_female: null,
        front_default: 
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        front_female: null,
        front_shiny: 
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
        front_shiny_female: null,
      },
      stats: [
        {
          base_stat: 45,
          effort: 0,
          stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' },
        },
      ],
      types: [
        {
          slot: 1,
          type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
        },
        {
          slot: 2,
          type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
        },
      ],
      weight: 69,
    }
  ]
};
