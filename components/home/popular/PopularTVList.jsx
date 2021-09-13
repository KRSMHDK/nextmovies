/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dateformat from 'dateformat';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function PopulartvList({ tvs }) {
  return (
    <div className="max-w-screen-xl mx-auto mt-5">
      <h1 className="mb-4 ml-4 text-2xl text-black whitespace-nowrap">Popular Tv Series</h1>
      <ul className="flex overflow-x-scroll ">
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
                    stroke: `${tv.vote_average > 7 ? '#13e451' : '#f0bb0e'}`,
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
            <div className="w-40 pt-5 overflow-wrap">
              <p className="pl-2 text-sm font-bold text-black">{tv.name}</p>
              <p className="pb-4 pl-2 text-sm font-light text-gray-600">
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
