/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import dateformat from 'dateformat';
import Pagination from '@material-ui/lab/Pagination';
import Image from 'next/image';
import { useRouter } from 'next/router';

function SearchResults({ results }) {
  const pageTotal = Math.ceil(results.total_results / 20);
  const router = useRouter();

  const handleSearch = (event, value) => {
    router.push(`/movie/popular/?page=${value}`);
  };

  return (
    <div className="flex ">
      <div>
        <div className="pt-5 pl-5 pr-5">
          <p className="h-auto px-4 py-2 text-left text-white bg-blue-500 rounded-t-lg text-md md:w-52">
            x movies
          </p>
          <p className="px-4 py-2 text-sm text-left border-b-2 md:w-52">
            Found {results.total_results} Movies
          </p>
        </div>
      </div>
      <div>
        <ul className="grid grid-cols-1 gap-5 px-5 pt-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {results.results.map((movie) => (
            <li
              className="min-h-0 mb-5 border-2 border-transparent rounded-lg shadow-md w-44 "
              key={movie.id}
            >
              <div className="">
                <Link href={`/movie/${movie.id}`}>
                  <a>
                    <Image
                      className="rounded-t-lg cursor-pointer"
                      height={273}
                      width={180}
                      unoptimized={true}
                      src={
                        movie.poster_path === null
                          ? 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                          : `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`
                      }
                      alt={movie.title}
                    />
                  </a>
                </Link>
              </div>
              <div className="pt-6 ml-4">
                <Link href={`/movie/${movie.id}`}>
                  <p className="text-sm font-bold cursor-pointer">{movie.title}</p>
                </Link>
                <p className="mb-4 text-sm font-light">
                  {dateformat(movie.release_date, 'longDate')}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <Pagination
          count={pageTotal}
          defaultPage={1}
          onChange={handleSearch}
          variant="outlined"
          color="primary"
        />
      </div>
    </div>
  );
}

export default SearchResults;
