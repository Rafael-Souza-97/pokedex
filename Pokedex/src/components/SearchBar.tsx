import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import '../styles/SearchBar.css';

function SearchBar() {
  return (
    <form className='search-container'>
      <input
        type='text'
        placeholder='Pesquise por um Pokémon'
        className='search-input'
        style={{ border: 'none' }}
      />

      <button type='submit' className='search-button'>
        <AiOutlineSearch className='search-icon' />
      </button>
    </form>
  );
}

export default SearchBar;
