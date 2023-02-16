import React from 'react';

interface IStatsBadgeProps {
  text: string;
}

const StatsBadge: React.FC<IStatsBadgeProps> = ({ text }) => {
  let backgroundColor = '';
  let color = '';
  let newText;

  switch (text) {
  case 'hp':
    newText = 'HP';
    backgroundColor = 'red';
    color = 'white';
    break;
  case 'attack':
    newText = 'ATK';
    backgroundColor = 'orange';
    color = 'black';
    break;
  case 'defense':
    newText = 'DEF';
    backgroundColor = 'gold';
    color = 'black';
    break;
  case 'special-attack':
    newText = 'SpA';
    backgroundColor = 'hotpink';
    color = 'black';
    break;
  case 'special-defense':
    newText = 'SpD';
    backgroundColor = 'blue';
    color = 'white';
    break;
  case 'speed':
    newText = 'SPD';
    backgroundColor = 'crimson';
    color = 'white';
    break;
  }

  return (
    <div style={{
      backgroundColor,
      color,
      fontSize: '13px',
      padding: '15px 10px',
      borderRadius: '50%',
      textTransform: 'capitalize',
      marginBottom: '10px'
    }}>
      { newText }
    </div>
  );
};

export default StatsBadge;
