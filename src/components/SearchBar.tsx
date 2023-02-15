import React, { useContext, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { PokemonsContext } from '../context';
import '../styles/SearchBar.css';

type SearchBarProps = {
  onSearch: (value: string) => void;
};

function SearchBar({ onSearch } : SearchBarProps) {
  const { setSearch } = useContext(PokemonsContext);
  const [inputValue, setInputValue] = useState('');
  
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
      onSearch(inputValue);
    }
  };
  
  return (
    <form className='search-container' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Pesquise por um Pokémon'
        className='search-input'
        value={inputValue}
        onChange={handleChange}
        data-testid='search-bar'
      />

      <div className='search-logo'>
        <button type="submit" className="submit-button">
          <AiOutlineSearch className='search-icon' />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
