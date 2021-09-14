/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dateformat from 'dateformat';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import colorScore from '../../../lib/utils/colorscore';

function PopularMovieList({ movies }) {
  return (
    <div className="max-w-screen-xl mx-auto mt-5">
      <ul className="flex overflow-x-scroll ">
        {movies.results.map((movie) => (
          <li key={movie.id} className="flex-none ml-2 ">
            <div className="relative">
              <Link href={`/movie/${movie.id}`} passHref>
                <a>
                  <Image
                    className="relative border rounded-lg cursor-pointer "
                    unoptimized={true}
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                    alt={movie.title}
                    width={150}
                    height={224}
                    placeholder="blur"
                    blurDataURL="/images/blur.png"
                  />
                </a>
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
                    stroke: colorScore(movie.vote_average),
                    strokeLinecap: 'butt',
                  },
                  trail: {
                    stroke: '#666464be',
                  },
                  text: {
                    fill: '#ffffff',
                    fontSize: '26px',
                  },
                  background: {
                    fill: '#080303',
                  },
                }}
              />
            </div>
            <div className="w-40 pt-5 overflow-wrap">
              <Link href={`/movie/${movie.id}`} passHref>
                <a>
                  <p className="text-sm font-bold text-black hover:text-gray-500 ">{movie.title}</p>
                </a>
              </Link>
              <p className="pb-4 text-sm font-light text-gray-600">
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
