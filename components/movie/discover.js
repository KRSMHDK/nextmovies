import React, { useEffect, useState } from 'react'
function Discover() {
  const [bgImage, setBgImage] = useState('/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg')

  useEffect(() => {
    const bgImageRoll = {
      0: '/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg',
      1: '/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg',
      2: '/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg',
      3: '/lzLzKXq2C0kL5Pu7VW5sNl5KV6L.jpg',
    }

    const picker = Math.floor(Math.random() * 3)
    setBgImage(bgImageRoll[picker])
  }, [])

  return (
    <>
      <div
        className='bg-cover  bg-no-repeat mx-72 h-80 '
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w1280${bgImage}')`,
        }}
      >
        <div className='  h-80 bg-gray-700 bg-opacity-70'>
          <p className=' pl-11 pt-14 text-5xl text-white'>Welcome.</p>

          <p className=' pl-11 text-3xl text-white'>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <input
            className='  border-2 mt-10 ml-10  h-10  rounded-full w-11/12 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='Movie'
            type='text'
            placeholder='Search for a movie'
          />
        </div>
      </div>
    </>
  )
}

export default Discover
