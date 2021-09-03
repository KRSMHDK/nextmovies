/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function PopularTrailer() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      const res = await fetch('/api/upcoming-movie');
      const data = await res.json();

      const res2 = await data.data.results.map((movie) => movie.id);

      const res3 = await Promise.all(
        res2.map((m) =>
          fetch('/api/popular-trailer', {
            method: 'POST',
            body: m,
          }).then((result) => result.json()),
        ),
      );

      setMovies(res3);
    };
    fetchResults();
  }, []);

  if (movies === null) {
    return <div />;
  }

  return (
    <div>
      <div
        className="bg-cover  bg-no-repeat mx-72 h-80 "
        style={{
          backgroundImage:
            'url("https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/4N6zEMfZ57zNEQcM8gWeERFupMv.jpg")',
        }}
      >
        <div className="bg-gray-900 h-80   bg-opacity-70  flex-none  mt-5 ">
          <p className="text-2xl pt-5 pl-5 pb-3 text-white">Latest Trailers</p>
          <ul className="flex overflow-x-scroll h-64 ">
            {movies.map((movie) => (
              <li key={movie.data.id} className="flex-none ml-5 ">
                <Link href={`/movies/${movie.data.id}`}>
                  <img
                    className="
                h-48 w-72  hover:scale-105 duration-300 rounded-lg"
                    src={`https://image.tmdb.org/t/p/w1280${movie.data.backdrop_path}`}
                    alt=""
                  />
                </Link>
                <div className=" text-center overflow-wrap w-40">
                  <p className="text-black font-bold">{movie.title}</p>
                  <p className="text-gray-600 font-extralight">{movie.release_date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PopularTrailer;
