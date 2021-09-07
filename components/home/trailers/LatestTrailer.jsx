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
      <div
        className="max-w-screen-xl mx-auto bg-no-repeat bg-cover h-80 "
        style={{
          backgroundImage:
            'url("https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/4N6zEMfZ57zNEQcM8gWeERFupMv.jpg")',
        }}
      >
        <div className="flex-none mt-5 bg-gray-900 h-80 bg-opacity-70 ">
          <p className="pt-5 pb-3 pl-5 text-2xl text-white">Latest Trailers</p>
          <ul className="flex h-64 overflow-x-scroll ">
            {movies.map((movie) => (
              <li key={movie.id} className="flex-none ml-5 ">
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PopularTrailer;
