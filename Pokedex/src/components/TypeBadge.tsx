import React from 'react';

interface ITypeBadgeProps {
  type: string;
}

const TypeBadge: React.FC<ITypeBadgeProps> = ({ type }) => {
  let backgroundColor = '';
  let color = '';

  switch (type) {
  case 'poison':
    backgroundColor = 'purple';
    color = 'white';
    break;
  case 'grass':
    backgroundColor = 'lightgreen';
    break;
  case 'water':
    backgroundColor = 'lightblue';
    break;
  case 'bug':
    backgroundColor = 'yellowgreen';
    color = 'white';
    break;
  case 'fire':
    backgroundColor = 'orangered';
    color = 'white';
    break;
  case 'normal':
    backgroundColor = 'gainsboro';
    break;
  case 'electric':
    backgroundColor = 'yellow';
    break;
  case 'ground':
    backgroundColor = 'sandybrown';
    break;
  case 'fairy':
    backgroundColor = 'pink';
    break;
  case 'fighting':
    backgroundColor = 'crimson';
    break;
  case 'psychic':
    backgroundColor = 'hotpink';
    break;
  case 'rock':
    backgroundColor = 'saddlebrown';
    break;
  case 'ghost':
    backgroundColor = 'slateblue';
    break;
  case 'dragon':
    backgroundColor = 'rebeccapurple';
    break;
  case 'dark':
    backgroundColor = 'dimgray';
    break;
  case 'steel':
    backgroundColor = 'silver';
    break;
  case 'ice':
    backgroundColor = 'cyan';
    break;
  default:
    backgroundColor = 'gainsboro';
    break;
  }

  return (
    <div style={{ backgroundColor, color, padding: '5px 10px', borderRadius: '5px' }}>
      {type}
    </div>
  );
};

export default TypeBadge;