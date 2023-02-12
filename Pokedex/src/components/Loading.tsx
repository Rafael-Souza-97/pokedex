import React from 'react';
import pokeball from '../assets/pokeball.png';
import '../styles/Loading.css';

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        <img src={pokeball} alt="pokeball-loading" className='loading-image' />
      </div>
    </div>
  );
};

export default Loading;