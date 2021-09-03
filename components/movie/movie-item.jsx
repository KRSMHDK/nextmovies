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
        className="bg-cover  mx-auto w-full bg-no-repeat  mt-5 "
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w1280${moviedetails.backdrop_path}')`,
        }}
      >
        <div className="lg:flex lg:pt-12 pb-12    bg-black bg-opacity-70">
          <div className="text-white mx-auto relative flex bg-blue-500 ">
            <img
              className=" border-black ml-5 mt-5 z-20 absolute rounded-2xl  w-20 h-30 "
              src={`https://image.tmdb.org/t/p/w500${moviedetails.poster_path}`}
              alt={moviedetails.title}
            />
            <div className="bg-gradient-to-r from-black inset-0   absolute z-10 w-full " />
            <img
              className="w-full h-40 zbg-grey-900 bg-opacity-75"
              src={`https://image.tmdb.org/t/p/w1280${moviedetails.backdrop_path}`}
              alt=""
            />
          </div>

          <div className=" ml-5 mt-7 flex-initial text-white">
            <p className="md:text-4xl text-center text-lg mb-2">
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