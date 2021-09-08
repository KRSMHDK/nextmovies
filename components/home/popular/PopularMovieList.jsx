/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dateformat from 'dateformat';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function PopularMovieList({ movies }) {
  return (
    <div className="max-w-screen-xl mx-auto mt-5">
      <ul className="flex overflow-x-scroll ">
        {movies.results.map((movie) => (
          <li key={movie.id} className="flex-none ml-2 ">
            <div className="relative">
              <Link className="" href={`/movies/${movie.id}`}>
                <Image
                  className="relative border rounded-lg cursor-pointer "
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                  width={150}
                  height={224}
                  placeholder="blur"
                  blurDataURL="/images/blur.png"
                />
              </Link>
              <CircularProgressbar
                className="absolute h-11 -bottom-4 -left-14"
                background
                strokeWidth={7}
                backgroundPadding={6}
                value={movie.vote_average * 10}
                text={`${movie.vote_average * 10}%`}
                styles={{
                  path: {
                    stroke: `${movie.vote_average > 7 ? '#13e451' : '#f0bb0e'}`,
                    strokeLinecap: 'butt',
                  },
                  trail: {
                    stroke: '#ffffff',
                  },
                  text: {
                    fill: '#fff',
                    fontSize: '26px',
                  },
                  background: {
                    fill: '#080303',
                  },
                }}
              />
            </div>
            <div className="w-40 pt-5 overflow-wrap">
              <p className="pl-2 text-sm font-bold text-black">{movie.title}</p>
              <p className="pb-4 pl-2 text-sm font-light text-gray-600">
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
