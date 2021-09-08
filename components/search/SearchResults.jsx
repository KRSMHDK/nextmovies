/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import dateformat from 'dateformat';

function SearchResults({ results }) {
  return (
    <div className="flex-row">
      <div>
        <div className="pt-5">
          <p className="h-auto px-4 py-2 text-left text-white bg-blue-500 rounded-t-lg text-md md:w-52">
            Search Results
          </p>
          <p className="px-4 py-2 text-sm text-left border-b-2 md:w-52">
            Found {results.data.total_results} Movies
          </p>
        </div>
      </div>
      <div>
        <ul className="px-5 pt-5">
          {results.data.results.map((movie) => (
            <li className="flex min-h-0 mb-5 border-2 rounded-lg shadow-md h-4/6" key={movie.id}>
              <Link href={`/movies/${movie.id}`}>
                <img
                  className="flex-none h-40 w-28 "
                  src={
                    movie.poster_path === null
                      ? 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                      : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  }
                  alt=""
                />
              </Link>
              <div className="pt-6 ml-4">
                <p className="font-bold text-md">{movie.title}</p>

                <p className="mb-4 text-sm font-light">
                  {dateformat(movie.release_date, 'longDate')}
                </p>
                <p className="w-full max-h-full mb-2 text-md line-clamp-2 ">{movie.overview}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchResults;
