/* eslint-disable react/prop-types */
import React from 'react';

function Media({ movieDetails }) {
  return (
    <div className="h-auto max-w-screen-xl pt-5 pl-5 mx-auto mt-2 ">
      <p className="text-lg font-bold">Media</p>
      <ul className="flex flex-shrink-0 pb-5 mt-3 overflow-x-scroll h-72 ">
        {movieDetails.images.backdrops.map((movie) => (
          <li key={movie.file_path} className="flex-shrink-0 mr-5 shadow-lg rounded-xl ">
            <img
              className="w-full h-full mx-auto rounded-xl"
              alt=""
              src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${movie.file_path}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Media;
