import  { useContext } from 'react';
import { PokemonsContext } from '.';

export const usePokemonsContext = () => {
  const context = useContext(PokemonsContext);
  
  return context;
};
