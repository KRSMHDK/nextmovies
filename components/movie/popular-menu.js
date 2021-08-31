import React, { useState, useEffect } from 'react'
import MovieList from './movie-list'

function PopularMenu({ popular, toprated, upcoming }) {
  const [Movies, setMovies] = useState(popular)

  const handlePopularChange = async () => {
    setMovies(popular)
  }

  const handleTopRatedChange = async () => {
    setMovies(toprated)
  }

  const handleUpcomingChange = async () => {
    setMovies(upcoming)
  }

  if (Movies === null) {
    return <div>loading </div>
  }

  return (
    <>
      <div className='ml-80 mt-5'>
        <p className='text-black bold inline text-2xl'>What's Popular</p>
        <ul className='border-2  border-black ml-5 py-1 px-2 inline rounded-full '>
          <li className='inline mr-4 active:bg-green-700'>
            <button value='popular' onClick={handlePopularChange}>
              Popular
            </button>
          </li>
          <li className='inline mr-4'>
            <button value='TopRated' onClick={handleTopRatedChange}>
              Top Rated
            </button>
          </li>
          <li className='inline'>
            <button value='upcoming' onClick={handleUpcomingChange}>
              Upcoming
            </button>
          </li>
        </ul>
      </div>
      <MovieList movies={Movies} />
    </>
  )
}

export default PopularMenu
