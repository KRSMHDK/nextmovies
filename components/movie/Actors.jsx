/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';

function Actors({ actors }) {
  return (
    <div className="h-auto max-w-screen-xl pt-5 pl-5 mx-auto mt-2 ">
      <p className="text-lg font-bold">Top Billed Cast </p>
      <ul className="flex flex-shrink-0 h-auto pb-5 mt-3 overflow-x-scroll ">
        {actors.cast.map((actor) => (
          <li key={actor.name} className="flex-shrink-0 h-auto pb-2 mr-5 shadow-lg w-28 rounded-xl">
            <Image
              className="mx-auto rounded-xl"
              width={112}
              height={142}
              alt={actor.name}
              placeholder="blur"
              blurDataURL="/images/blur.png"
              src={
                actor.profile_path === null
                  ? 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                  : `https://image.tmdb.org/t/p/w138_and_h175_face${actor.profile_path}`
              }
            />
            <p className="pl-2 text-sm font-bold text-left">{actor.name}</p>
            <p className="pl-2 text-sm text-left ">{actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Actors;
