/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import dateformat from 'dateformat';
import Pagination from '@material-ui/lab/Pagination';
import Image from 'next/image';
import { useRouter } from 'next/router';

function SearchResults({ results, searchQuery }) {
  const pageTotal = Math.ceil(results.total_results / 20);
  const router = useRouter();

  const handleSearch = (event, value) => {
    router.push(`/search?page=${value}&search=${searchQuery}`);
  };

  return (
    <div className="flex-row md:flex">
      <div>
        <div className="pt-5 pl-5 pr-5">
          <p className="h-auto px-4 py-2 text-left text-white bg-blue-500 rounded-t-lg text-md md:w-52">
            Search Results for {searchQuery}
          </p>
          <p className="px-4 py-2 text-sm text-left border-b-2 md:w-52">
            Found {results.total_results} Movies
          </p>
        </div>
      </div>
      <div>
        <ul className="px-5 pt-5">
          {results.results.map((movie) => (
            <li
              className="flex min-h-0 mb-5 border-2 border-transparent rounded-lg shadow-md md:w-5/6 h-4/6"
              key={movie.id}
            >
              <div className="flex-shrink-0">
                <Link href={`/movie/${movie.id}`}>
                  <Image
                    className="cursor-pointer frounded-lg"
                    height={141}
                    width={94}
                    unoptimized={true}
                    src={
                      movie.poster_path === null
                        ? 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                        : `https://www.themoviedb.org/t/p/w94_and_h141_bestv2${movie.poster_path}`
                    }
                    alt={movie.title}
                  />
                </Link>
              </div>
              <div className="pt-6 ml-4">
                <Link href={`/movie/${movie.id}`}>
                  <p className="font-bold cursor-pointer text-md">{movie.title}</p>
                </Link>
                <p className="mb-4 text-sm font-light">
                  {dateformat(movie.release_date, 'longDate')}
                </p>
                <p className="w-full max-h-full mb-2 text-sm line-clamp-2 ">{movie.overview}</p>
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
