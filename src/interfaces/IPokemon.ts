import IPokemonDetail from './IPokemonDetail';

export default interface IPokemon {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemonDetail[];
}
