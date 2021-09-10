/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image from 'next/image';
// eslint-disable-next-line no-unused-vars
function EventItem({ tvdetails }) {
  function timeConvert(n) {
    const num = n;
    const hours = num / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return `${rhours}h ${rminutes}m`;
  }

  return (
    <div>
      <div className="relative mx-auto ">
        <Image
          className="-z-10"
          layout="fill"
          src={`https://image.tmdb.org/t/p/w1280${tvdetails.backdrop_path}`}
          objectFit="cover"
          objectPosition="top"
        />
        <div className="pt-12 pb-12 pr-5 bg-black sm:flex sm:pr-24 sm:pl-72 bg-opacity-70">
          <div className="relative flex flex-col text-white sm:flex-row">
            <img
              className="z-20 w-48 mx-auto border-black sm:static sm:w-64 sm:h-96 sm:flex rounded-2xl"
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${tvdetails.poster_path}`}
              alt={tvdetails.name}
            />
            <div className="pl-10 mx-auto mt-5 text-white ">
              <p className="mb-2 text-2xl font-semibold text-center sm:text-4xl sm:text-left">
                {tvdetails.name}
                <span className="font-extralight"> ({tvdetails.first_air_date.slice(0, 4)})</span>
              </p>

              {tvdetails.genres.map((genre) => (
                <span
                  className="inline px-1 mr-1 text-black bg-yellow-500 border border-red-600 rounded "
                  key={genre.name}
                >
                  {genre.name}
                </span>
              ))}

              <span className="h-5 text-sm align-middle">
                <Image height={17} width={17} src="/clock.png" alt="clock" />
                {timeConvert(tvdetails.episode_run_time[0])}
              </span>

              <p className="mt-5 italic text-gray-300">{tvdetails.tagline}</p>
              <div className="inline-flex mt-5">
                <CircularProgressbar
                  className="h-20"
                  background
                  strokeWidth={7}
                  backgroundPadding={6}
                  value={tvdetails.vote_average * 10}
                  text={`${tvdetails.vote_average * 10}%`}
                  styles={{
                    path: {
                      stroke: `${tvdetails.vote_average > 7 ? '#13e451' : '#f0bb0e'}`,
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

                <span className="w-20 pl-1 m-auto font-bold "> User Score</span>
              </div>

              <p className="mt-4 mb-3 text-2xl">Overview</p>
              <p className="">{tvdetails.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventItem;
