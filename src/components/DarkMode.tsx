import React, { useContext, useEffect } from 'react';
import { PokemonsContext } from '../context';
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';
import '../styles/DarkMode.css';

function DarkMode() {
  const { isDarkModeOn, setIsDarkModeOn } = useContext(PokemonsContext);

  const toggleMode = () => {
    setIsDarkModeOn(!isDarkModeOn);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkModeOn);
  }, [isDarkModeOn]);


  return (
    <div className='dark-mode-toggle'>
      <button className="toggle-btn" onClick={toggleMode}>
        <div className={`toggle-track ${isDarkModeOn ? 'dark-mode' : 'light-mode'}`}>
          <div className="toggle-thumb"></div>
        </div>
        { isDarkModeOn ? 
          <BsFillMoonStarsFill color="rgb(200, 200, 200)" className="toggle-moon-icon" /> :
          <BsSun  className="toggle-sun-icon" />}
      </button>
    </div>
  );
}

export default DarkMode;
