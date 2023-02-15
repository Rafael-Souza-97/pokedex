import IPokemonData from './IPokemonData';

export default interface ISearchPokemonData {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemonData[];
}
