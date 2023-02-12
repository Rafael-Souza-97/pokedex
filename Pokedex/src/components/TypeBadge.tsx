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
    break;
  case 'grass':
    backgroundColor = 'green';
    break;
  case 'water':
    backgroundColor = 'light-blue';
    break;
  case 'bug':
    backgroundColor = 'light-green';
    break;
  case 'fire':
    backgroundColor = 'orange';
    color = 'black';
    break;
  case 'normal':
    backgroundColor = 'gray';
    break;
  default:
    backgroundColor = 'gray';
    break;
  }

  return (
    <div style={{ backgroundColor, color, padding: '5px 10px', borderRadius: '5px' }}>
      {type}
    </div>
  );
};

export default TypeBadge;