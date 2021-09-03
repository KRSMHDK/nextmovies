/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';

function PopularMovieList({ movies }) {
  return (
    <div className="mx-auto max-w-screen-xl mt-5">
      <ul className="flex overflow-x-scroll ">
        {movies.results.map((movie) => (
          <li key={movie.id} className="flex-none  ml-5 ">
            <Link href={`/movies/${movie.id}`}>
              <img
                className=" h-56 w-40 border rounded-lg cursor-pointer"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
            </Link>
            <div className=" text-center overflow-wrap w-40">
              <p className="text-black font-bold">{movie.title}</p>
              <p className="text-gray-600 font-extralight">{movie.release_date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PopularMovieList;
