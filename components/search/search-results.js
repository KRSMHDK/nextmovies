import React from 'react'
import Link from 'next/link'

function SearchResults({ results }) {
  return (
    <div>
      <ul>
        {results.data.results.map((movie) => (
          <li className=' ml-56 mr-96 border-2 flex ' key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              <img
                className='h-56 w-40  flex-none border rounded-lg'
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=''
              />
            </Link>
            <div>
              <p className=' text-2xl '>{movie.title}</p>

              <p className=''>{movie.release_date}</p>
              <p className=''>{movie.overview}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchResults
