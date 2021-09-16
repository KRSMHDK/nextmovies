import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image from 'next/image';
import timeConverter from '../../lib/utils/timeConverter';
import dateformat from 'dateformat';
import rating from '../../lib/utils/rating';
import colorScore from '../../lib/utils/colorscore';

function ItemViewer({ details, countryCode, type }) {
  const movie = {
    title: 'title',
    release_date: 'release_date',
    runtime: 'runtime',
  };

  const tv = {
    title: 'name',
    release_date: 'first_air_date',
    runtime: 'episode_run_time',
  };

  const { country, certification } = rating(details, countryCode, type);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (type === 'movie') {
      setCategory(movie);
    } else {
      setCategory(tv);
    }
  }, []);

  return (
    <div className="relative z-10">
      <Image
        className="-z-10"
        layout="fill"
        unoptimized={true}
        src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`}
        objectFit="cover"
        objectPosition="top"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative h-auto max-w-screen-xl py-10 mx-auto px-7 ">
        <div className="relative flex flex-col text-white sm:flex-row">
          <img
            className="z-20 w-48 mx-auto border-black rounded-lg sm:w-300px sm:h-450px"
            src={
              details.poster_path === null
                ? 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                : `https://image.tmdb.org/t/p/w300_and_h450_bestv2${details.poster_path}`
            }
            alt={details[category.title]}
          />

          <div className="pl-5 pr-5 mx-auto mt-5 text-white ">
            <p className="text-2xl font-semibold text-center sm:text-4xl sm:text-left">
              {details[category.title]}{' '}
              <span className="font-light">
                {details[category.release_date] &&
                  `
                    (${details[category.release_date].slice(0, 4)})
                  `}
              </span>
            </p>

            <div className="mt-10 text-sm sm:mt-2">
              {certification && (
                <span className="px-1 py-1 mr-1 text-xs text-gray-300 border-2 border-gray-300 ">
                  {certification}{' '}
                </span>
              )}
              <span className="hidden mr-2 sm:inline">
                {details[category.release_date] &&
                  dateformat(details[category.release_date], 'paddedShortDate')}{' '}
                {country && <span> ({country})</span>}
              </span>
              <span>• </span>
              {details.genres.map((genre, index) => (
                <span className="inline " key={genre.name}>
                  {genre.name}
                  {index < details.genres.length - 1 ? ', ' : ''}
                </span>
              ))}
              <span> • </span>
              <span className="">
                {details[category.runtime] &&
                  timeConverter(details[category.runtime][0] || details[category.runtime])}
              </span>
            </div>

            <p className="mt-5 italic text-gray-300">{details.tagline}</p>
            <div className="inline-flex mt-5">
              <CircularProgressbar
                className="h-16"
                background
                strokeWidth={7}
                backgroundPadding={6}
                value={details.vote_average * 10}
                text={`${details.vote_average * 10}%`}
                styles={{
                  path: {
                    stroke: colorScore(details.vote_average),
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

              <span className="w-20 pl-1 m-auto font-bold "> User Score</span>
            </div>
            <p className="mt-4 mb-3 text-xl">Overview</p>
            <p className="">{details.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemViewer;
