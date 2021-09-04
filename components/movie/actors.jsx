/* eslint-disable react/prop-types */
import React from 'react';

function Actors({ actors }) {
  return (
    <div className="h-auto max-w-screen-xl pt-5 mx-auto mt-5 ">
      <ul className="flex h-auto pb-5 overflow-x-scroll ">
        {actors.cast.map((actor) => (
          <li className="flex-shrink-0 mr-5 rounded-xl ">
            <img
              className="mx-auto rounded-xl"
              alt={actor.name}
              src={`https://www.themoviedb.org/t/p/w138_and_h175_face${actor.profile_path}`}
            />
            <p className="font-bold text-center text-md">{actor.name}</p>
            <p className="text-center text-md">{actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Actors;
