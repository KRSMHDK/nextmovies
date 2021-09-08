/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dateformat from 'dateformat';

function PopularMovieList({ movies }) {
  return (
    <div className="max-w-screen-xl mx-auto mt-5">
      <ul className="flex overflow-x-scroll ">
        {movies.results.map((movie) => (
          <li key={movie.id} className="flex-none ml-2 ">
            <Link href={`/movies/${movie.id}`}>
              <Image
                className="border rounded-lg cursor-pointer"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
                width={150}
                height={224}
                placeholder="blur"
                blurDataURL="/images/blur.png"
              />
            </Link>
            <div className="w-40 overflow-wrap">
              <p className="pl-2 font-bold text-black">{movie.title}</p>
              <p className="pb-2 pl-2 font-light text-gray-600">
                {dateformat(movie.release_date, 'mediumDate')}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PopularMovieList;
