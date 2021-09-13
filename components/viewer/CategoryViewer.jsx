/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import dateformat from 'dateformat';
import Pagination from '@material-ui/lab/Pagination';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function SearchResults({ results, category, type, id }) {
  const pageTotal = Math.ceil(results.total_results / 20);
  const router = useRouter();

  const handleSearch = (event, value) => {
    router.push(`/${id}/${category}/?page=${value}`);
  };

  return (
    <div className="container px-10 py-10 mx-auto">
      <p className="text-2xl font-bold"> {type}</p>
      <div className="flex-row md:flex ">
        <form>
          <div className="pt-5 pr-5">
            <p className="h-auto px-4 py-2 mb-2 font-semibold text-left border-2 rounded-lg shadow-md text-md md:w-60">
              Sort
            </p>
            <p className="h-auto px-4 py-2 mb-2 font-semibold text-left border-2 rounded-lg shadow-md text-md md:w-60">
              Filters
            </p>
            <p className="h-auto px-4 py-2 font-semibold text-left border-2 rounded-lg shadow-md text-md md:w-60">
              Where To Watch
            </p>
          </div>
          <button className="h-auto px-4 py-3 mt-5 font-semibold text-center text-white bg-blue-500 border-2 rounded-full text-md md:w-60">
            Search
          </button>
        </form>
        <div>
          <ul className="grid grid-cols-1 gap-5 px-5 pt-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {results.results.map((movie) => (
              <li
                className="min-h-0 mb-5 border-2 border-transparent rounded-lg shadow-md w-44 "
                key={movie.id}
              >
                <div className="relative">
                  <Link href={`/${id}/${movie.id}`}>
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
                        alt={movie.title || movie.name}
                      />
                    </a>
                  </Link>
                  <CircularProgressbar
                    className="absolute h-11 -bottom-4 -left-14"
                    background
                    strokeWidth={7}
                    backgroundPadding={6}
                    value={movie.vote_average * 10}
                    text={`${movie.vote_average * 10}%`}
                    styles={{
                      path: {
                        stroke: `${movie.vote_average > 7 ? '#13e451' : '#f0bb0e'}`,
                        strokeLinecap: 'butt',
                      },
                      trail: {
                        stroke: '#666464be',
                      },
                      text: {
                        fill: '#fff',
                        fontSize: '26px',
                      },
                      background: {
                        fill: '#080303',
                      },
                    }}
                  />
                </div>
                <div className="pt-6 ml-4">
                  <Link href={`/${id}/${movie.id}`}>
                    <p className="text-sm font-bold cursor-pointer">{movie.title || movie.name}</p>
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
    </div>
  );
}

export default SearchResults;
