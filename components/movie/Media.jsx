/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';

function Media({ movieDetails }) {
  return (
    <div className="h-auto max-w-screen-xl pt-5 pl-5 mx-auto mt-2 ">
      <p className="text-lg font-bold">Media</p>
      <ul className="flex mt-3 overflow-x-scroll rounded-xl">
        {movieDetails.images.backdrops.length === 0 ? (
          <div>No Backdrops Found </div>
        ) : (
          movieDetails.images.backdrops.map((movie) => (
            <li key={movie.file_path} className="flex-shrink-0 ">
              <Image
                className="mx-auto "
                placeholder="blur"
                blurDataURL="/images/blur.png"
                width={533}
                height={300}
                src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${movie.file_path}`}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Media;
