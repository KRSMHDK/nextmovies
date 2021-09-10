/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Recommendations({ recommendations }) {
  return (
    <div className="h-auto max-w-screen-xl pt-5 pl-5 mx-auto mt-2 border-t-2 ">
      <h1 className="text-xl font-bold">Recommendations</h1>
      <ul className="flex flex-shrink-0 mt-3 overflow-x-auto rounded-xl">
        {recommendations.results.map((rec) => (
          <li key={rec.id} className="flex-shrink-0 w-64 h-auto mr-3 ">
            <div>
              <Link className="flex-shrink-0 " href={`/movies/${rec.id}`}>
                <Image
                  className="mx-auto cursor-pointer"
                  placeholder="blur"
                  blurDataURL="/images/blur.png"
                  width={250}
                  height={141}
                  src={`https://www.themoviedb.org/t/p/w250_and_h141_face${rec.backdrop_path}`}
                />
              </Link>
            </div>
            <div className="flex">
              <p className="text-md">{rec.name || rec.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;
