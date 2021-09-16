import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dateformat from 'dateformat';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import colorScore from '../../../lib/utils/colorscore';

function PopulartvList({ tvs }) {
  const [fadingScroll, setFadingScroll] = useState(0);
  return (
    <div className="relative max-w-screen-xl mx-auto mt-5">
      <div
        className={`
             duration-200 transition-all absolute top-0 right-0 z-50 h-full  w-14   ${
               fadingScroll > 75 ? 'bg-transparent' : 'bg-gradient-to-r from-transparent to-white'
             }`}
      ></div>
      <h1 className="mb-4 ml-4 text-2xl font-semibold text-black whitespace-nowrap">
        Popular Tv Series
      </h1>

      <ul
        className="flex overflow-x-scroll "
        onScroll={(e) => setFadingScroll(e.target.scrollLeft)}
      >
        {tvs.results.map((tv) => (
          <li key={tv.id} className="flex-none ml-2 ">
            <div className="relative">
              <Link href={`/tv/${tv.id}`} passHref>
                <a>
                  <Image
                    unoptimized={true}
                    className="relative border rounded-lg cursor-pointer "
                    src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                    alt={tv.name}
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
                value={tv.vote_average * 10}
                text={`${tv.vote_average * 10}%`}
                styles={{
                  path: {
                    stroke: colorScore(tv.vote_average),
                    strokeLinecap: 'butt',
                  },
                  trail: {
                    stroke: '#666464be',
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
            <div className="w-40 pt-5 pl-2 overflow-wrap">
              <Link href={`/tv/${tv.id}`} passHref>
                <a>
                  <p className="text-sm font-bold text-black hover:text-gray-500">{tv.name}</p>
                </a>
              </Link>

              <p className="pb-4 text-sm font-light text-gray-600">
                {dateformat(tv.first_air_date, 'mediumDate')}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PopulartvList;
