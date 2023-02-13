import React, { useContext } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { PokemonsContext } from '../context';
import '../styles/SearchBar.css';

function SearchBar() {
  const { search, setSearch } = useContext(PokemonsContext);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  
  return (
    <form className='search-container' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Pesquise por um Pokémon'
        className='search-input'
        value={search}
        onChange={handleChange}
        data-testid='search-bar'
      />

      <div className='search-logo'>
        <AiOutlineSearch className='search-icon' />
      </div>
    </form>
  );
}

export default SearchBar;
