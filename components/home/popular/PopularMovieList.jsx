/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dateformat from 'dateformat';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import colorScore from '../../../lib/utils/colorscore';

function PopularMovieList({ movies }) {
  const [fadingScroll, setFadingScroll] = useState(0);

  return (
    <div className="relative max-w-screen-xl mx-auto mt-5 ">
      <div
        className={`
             duration-200 transition-all absolute top-0 right-0 z-50 h-full  w-14   ${
               fadingScroll > 75 ? 'bg-transparent' : 'bg-gradient-to-r from-transparent to-white'
             }`}
      ></div>
      <ul
        className="z-10 flex overflow-x-scroll "
        onScroll={(e) => setFadingScroll(e.target.scrollLeft)}
      >
        {movies.results.map((movie) => (
          <li key={movie.id} className="flex-none ml-2 ">
            <div className="relative ">
              <Link href={`/movie/${movie.id}`} passHref>
                <a>
                  <Image
                    className="relative transition-all duration-500 border rounded-lg cursor-pointer"
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
            <div className="w-40 pt-5 pl-2 overflow-wrap">
              <Link href={`/movie/${movie.id}`} passHref>
                <a>
                  <p className="font-bold text-black hover:text-blue-500">{movie.title}</p>
                </a>
              </Link>
              <p className="pb-4 font-light text-gray-600">
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
