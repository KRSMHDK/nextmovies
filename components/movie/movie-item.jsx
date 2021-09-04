/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line no-unused-vars
function EventItem({ moviedetails, movieyoutube }) {
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
      <div
        className="mx-auto mt-5 bg-no-repeat bg-cover "
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w1280${moviedetails.backdrop_path}')`,
        }}
      >
        <div className="pt-12 pb-12 bg-black sm:flex sm:pl-20 sm:pr-20 bg-opacity-70">
          <div className="relative flex flex-col text-white sm:flex-row">
            <img
              className="z-20 w-48 mx-auto border-black  sm:static sm:w-72 sm:h-96 sm:flex rounded-2xl"
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${moviedetails.poster_path}`}
              alt={moviedetails.title}
            />

            <div className="mx-auto mt-5 ml-5 text-white ">
              <p className="mb-2 text-2xl text-center sm:text-4xl sm:text-left">
                {moviedetails.title} - {moviedetails.release_date.slice(0, 4)}
              </p>

              {moviedetails.genres.map((genre) => (
                <span
                  className="inline px-1 mr-1 text-black bg-yellow-500 border border-red-600 rounded "
                  key={genre.name}
                >
                  {genre.name}
                </span>
              ))}

              <span>
                <img className="inline h-5 mr-1" src="/clock.png" alt="" />
                {timeConvert(moviedetails.runtime)}
              </span>
              <p className="mt-5 italic  text-gray-50">{moviedetails.tagline}</p>
              <p className="inline-block px-4 py-3 mt-3 text-2xl border-4 border-green-600 rounded-full ">
                {moviedetails.vote_average}
              </p>
              <span> User Score</span>
              <p className="mt-4 mb-3 text-2xl">Overview</p>
              <p className="">{moviedetails.overview}</p>
            </div>
          </div>
        </div>
      </div>
      {/* {movieyoutube.results[0] && (
        <div className="pt-5 mx-96">
          <iframe
            width="1088"
            height="600"
            src={`https://www.youtube.com/embed/${movieyoutube.results[0].key}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )} */}
    </div>
  );
}

export default EventItem;
