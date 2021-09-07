import React, { useState } from 'react';
import PopularMovieList from './PopularMovieList';

// eslint-disable-next-line react/prop-types
function PopularMenu({ popularMovies, upcomingMovies, topRatedMovies }) {
  const [Movies, setMovies] = useState(popularMovies);

  return (
    <>
      <div className="relative inline-block max-w-screen-xl pl-5 mx-auto mt-5 group md:flex pr-14">
        <p className="text-2xl text-black bold whitespace-nowrap">What&apos;s Popular</p>
        <ul className="hidden px-2 py-1 ml-5 border-2 border-black rounded-lg group-hover:block whitespace-nowrap md:rounded-full ">
          <li className="mr-4 md:inline active:bg-green-700">
            <button type="button" value="popular" onClick={() => setMovies(popularMovies)}>
              Popular
            </button>
          </li>
          <li className="mr-4 md:inline">
            <button type="button" value="TopRated" onClick={() => setMovies(topRatedMovies)}>
              Top Rated
            </button>
          </li>
          <li className=" group-hover:block md:inline">
            <button type="button" value="upcoming" onClick={() => setMovies(upcomingMovies)}>
              Upcoming
            </button>
          </li>
        </ul>
      </div>
      <PopularMovieList movies={Movies} />
    </>
  );
}

export default PopularMenu;
