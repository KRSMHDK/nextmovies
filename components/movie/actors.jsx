/* eslint-disable react/prop-types */
import React from 'react';

function Actors({ actors }) {
  return (
    <div>
      {actors.cast.map((actor) => (
        <p>{actor.name}</p>
      ))}
    </div>
  );
}

export default Actors;
