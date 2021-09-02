import React, { useState, useEffect } from 'react';
import PopularMovieList from './popular-movie-list';

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
      <div className="ml-80 mt-5">
        <p className="text-black bold inline text-2xl">What&apos;s Popular</p>
        <ul className="border-2  border-black ml-5 py-1 px-2 inline rounded-full ">
          <li className="inline mr-4 active:bg-green-700">
            <button type="button" value="popular" onClick={handlePopularChange}>
              Popular
            </button>
          </li>
          <li className="inline mr-4">
            <button type="button" value="TopRated" onClick={handleTopRatedChange}>
              Top Rated
            </button>
          </li>
          <li className="inline">
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
