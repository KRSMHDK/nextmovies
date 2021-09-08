import React, { Fragment, useState } from 'react';
import { Tab } from '@headlessui/react';
import PopularMovieList from './PopularMovieList';

// eslint-disable-next-line react/prop-types
function PopularMenu({ popularMovies, upcomingMovies, topRatedMovies }) {
  const [Movies, setMovies] = useState(popularMovies);

  return (
    <>
      <div className="relative inline-block max-w-screen-xl pl-5 mx-auto mt-5 group md:flex pr-14">
        <h1 className="text-2xl text-black bold whitespace-nowrap">What&apos;s Popular</h1>
        <Tab.Group>
          <Tab.List className="flex gap-2 ml-5">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  type="button"
                  className={selected ? 'bg-blue-500/30 shadow px-2 rounded-xl' : 'text-black px-2'}
                  value="popular"
                  onClick={() => setMovies(popularMovies)}
                >
                  Popular
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  type="button"
                  className={selected ? 'bg-blue-500/30 shadow px-2 rounded-xl' : 'text-black px-2'}
                  value="upcoming"
                  onClick={() => setMovies(upcomingMovies)}
                >
                  Upcoming
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  type="button"
                  className={selected ? 'bg-blue-500/30 shadow px-2 rounded-xl' : 'text-black px-2'}
                  value="Top Rated"
                  onClick={() => setMovies(topRatedMovies)}
                >
                  Top Rated
                </button>
              )}
            </Tab>
          </Tab.List>
        </Tab.Group>
      </div>
      <PopularMovieList movies={Movies} />
    </>
  );
}

export default PopularMenu;
