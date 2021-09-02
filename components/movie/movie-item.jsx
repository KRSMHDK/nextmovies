/* eslint-disable react/prop-types */
import React from 'react';

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
        className="bg-cover bg-no-repeat  mt-5 "
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w1280${moviedetails.backdrop_path}')`,
        }}
      >
        <div className="flex pt-12 pb-12 bg-black bg-opacity-70">
          <div className="flex-none">
            <img
              className=" border-black rounded-3xl ml-64 w-64 h-96 "
              src={`https://image.tmdb.org/t/p/w500${moviedetails.poster_path}`}
              alt={moviedetails.title}
            />
          </div>

          <div className=" ml-5 mt-7 mr-96 flex-initial text-white">
            <p className="text-4xl mb-2">
              {moviedetails.title}
              {moviedetails.release_date}
            </p>

            {moviedetails.genres.map((genre) => (
              <span
                className="border px-1 mr-1  text-black rounded inline border-red-600 bg-yellow-500 "
                key={genre.name}
              >
                {genre.name}
              </span>
            ))}

            <span>
              <img className="h-5 mr-1 inline" src="/clock.png" alt="" />
              {timeConvert(moviedetails.runtime)}
            </span>
            <p className=" italic mt-5 text-gray-50">{moviedetails.tagline}</p>
            <p className="border-green-600 mt-3 text-2xl inline-block border-4 px-4 py-3 rounded-full  ">
              {moviedetails.vote_average}
            </p>
            <span> User Score</span>
            <p className="mt-4 mb-3 text-2xl">Overview</p>
            <p className=" ">{moviedetails.overview}</p>
          </div>
        </div>
      </div>
      {movieyoutube.results[0] && (
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
      )}
    </div>
  );
}

export default EventItem;
