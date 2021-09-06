/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function PopularMovieList({ movies }) {
  return (
    <div className="max-w-screen-xl mx-auto mt-5">
      <ul className="flex overflow-x-scroll ">
        {movies.results.map((movie) => (
          <li key={movie.id} className="flex-none ml-5 ">
            <Link href={`/movies/${movie.id}`}>
              <Image
                className="border rounded-lg cursor-pointer"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
                width={160}
                height={224}
                placeholder="blur"
                blurDataURL="/images/blur.png"
              />
            </Link>
            <div className="w-40 text-center overflow-wrap">
              <p className="font-bold text-black">{movie.title}</p>
              <p className="text-gray-600 font-extralight">{movie.release_date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PopularMovieList;
