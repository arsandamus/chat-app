import React from 'react';

function DisplaySimpsons({ character }) {
  return (
    <div className="DisplaySimpsons">
      <img
        src={character.image}
        alt={character.character}
      />
      <h3>{character.character}</h3>
      <p>{character.quote}</p>
      
    </div>
  );
};

export default DisplaySimpsons;