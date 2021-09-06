import React, { useState, useEffect } from 'react';
import PopularMovieList from './PopularMovieList';

function PopularMenu() {
  const [Movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      const res = await fetch('/api/popular-movie');
      const data = await res.json();

      setMovies(data.data);
    };
    fetchResults();
  }, []);

  const handlePopularChange = async () => {
    const res = await fetch('/api/popular-movie');
    const data = await res.json();
    setMovies(data.data);
  };

  const handleTopRatedChange = async () => {
    const res = await fetch('/api/top-rated');
    const data = await res.json();
    setMovies(data.data);
  };

  const handleUpcomingChange = async () => {
    const res = await fetch('/api/upcoming-movie');
    const data = await res.json();
    setMovies(data.data);
  };

  if (Movies === null) {
    return <div />;
  }

  return (
    <>
      <div className="relative inline-block max-w-screen-xl pl-5 mx-auto mt-5 group md:flex pr-14">
        <p className="text-2xl text-black bold whitespace-nowrap">What&apos;s Popular</p>
        <ul className="hidden px-2 py-1 ml-5 border-2 border-black rounded-lg group-hover:block whitespace-nowrap md:rounded-full ">
          <li className="mr-4 md:inline active:bg-green-700">
            <button type="button" value="popular" onClick={handlePopularChange}>
              Popular
            </button>
          </li>
          <li className="mr-4  md:inline">
            <button type="button" value="TopRated" onClick={handleTopRatedChange}>
              Top Rated
            </button>
          </li>
          <li className=" group-hover:block md:inline">
            <button type="button" value="upcoming" onClick={handleUpcomingChange}>
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
