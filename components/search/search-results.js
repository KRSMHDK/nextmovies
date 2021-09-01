import React from 'react'
import Link from 'next/link'

function SearchResults({ results }) {
  return (
    <div className='flex'>
      <div>
        <div className='ml-40 mt-20 w-14 '>
          <p className='w-52 border-2 bg-blue-500 rounded-t-lg text-white py-5 text-center text-xl'>
            Search Results
          </p>
          <p className='w-52 h-20 text-left px-5 py-5 rounded-b-lg text-lg border-2 bg-gray-200'>
            Movies - {results.data.total_results}
          </p>
        </div>
      </div>
      <div>
        <ul className='mt-20 '>
          {results.data.results.map((movie) => (
            <li
              className='shadow-md ml-56 mr-96 border-2 rounded-lg mb-5 flex '
              key={movie.id}
            >
              <Link href={`/movies/${movie.id}`}>
                <img
                  className='h-40 w-28 flex-none  '
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=''
                />
              </Link>
              <div className='ml-4'>
                <p className=' text-2xl bold '>{movie.title}</p>

                <p className='mb-2'>{movie.release_date}</p>
                <p className='mb-2 overflow-hidden mr-12'>{movie.overview}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchResults
