/* eslint-disable react/prop-types */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

function PopularTrailer({ latestTrailer }) {
  const [movies] = useState(latestTrailer);

  return (
    <div>
      <div className="relative max-w-screen-xl mx-auto ">
        <div className="absolute">
          <Image
            className="bg-scroll -z-10"
            height={367}
            width={1280}
            layout="fixed"
            src="https://image.tmdb.org/t/p/w1920_and_h427_multi_faces/4N6zEMfZ57zNEQcM8gWeERFupMv.jpg"
          />
        </div>

        <div className="bg-gray-900 bg-opacity-70">
          <p className="pt-5 pb-3 pl-5 text-2xl text-white">Latest Trailers</p>
          <ul className="flex pb-10 overflow-x-scroll h-80 ">
            {movies.map(
              (movie) =>
                movie.videos.results[0] !== undefined && (
                  <li key={movie.id} className="flex-none h-48 ml-5 w-72">
                    <Link href={`/movies/${movie.id}`}>
                      <Image
                        className="duration-300 rounded-lg hover:scale-105"
                        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                        alt=""
                        height={192}
                        width={288}
                        placeholder="blur"
                        blurDataURL="/images/blur.png"
                      />
                    </Link>
                    <p className="flex-wrap text-center text-white align-center">{movie.title}</p>
                  </li>
                ),
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PopularTrailer;
