import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { PokemonsContext } from '../context';
import '../styles/Dark-Mode/SearchBar-Dark.css';
import '../styles/SearchBar.css';

function SearchBar() {
  const { setSearch, isDarkModeOn } = useContext(PokemonsContext);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => { 
    if (isDarkModeOn) { 
      document.body.classList.add('dark-mode');
    } else { 
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkModeOn]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      window.location.href = '/';
      window.location.reload();
    } else {
      setSearch(inputValue);
    }
  };
  
  return (
    <form 
      className={ isDarkModeOn ? 'search-container dark-mode' : 'search-container' }
      onSubmit={ handleSubmit }
    >
      <input
        type='text'
        placeholder='Pesquise por um Pokémon'
        value={inputValue}
        onChange={handleChange}
        data-testid='search-bar'
        className={ isDarkModeOn ? 'search-input dark-mode' : 'search-input' }
      />

      <div className={ isDarkModeOn ? 'search-logo dark-mode' : 'search-logo' } >
        <button
          type="submit"
          className={ isDarkModeOn ? 'submit-button dark-mode' : 'submit-button' }
        >
          <AiOutlineSearch className={ isDarkModeOn ? 'search-icon dark-mode' : 'search-icon' } />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
