import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function Discover() {
  const [bgImage, setBgImage] = useState('/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg');
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const bgImageRoll = {
      0: '/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg',
      1: '/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg',
      2: '/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg',
      3: '/lzLzKXq2C0kL5Pu7VW5sNl5KV6L.jpg',
    };
    const picker = Math.floor(Math.random() * 3);
    setBgImage(bgImageRoll[picker]);
  }, []);

  function handleSearch(event) {
    event.preventDefault();
    router.push(`/search?query=${searchQuery}`);
  }
  return (
    <>
      <div
        className="bg-cover bg-gray-700 bg-opacity-70 mx-auto max-w-screen-xl   justify-center h-80 "
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w1280${bgImage}')`,
        }}
      >
        <div className="h-80 pt-14  pr-12 pl-11 bg-gray-700 bg-opacity-70">
          <p className="text-5xl text-white">Welcome.</p>

          <p className="text-3xl text- text-white">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <form className="mt-10 flex p-auto    w-auto border-2" onSubmit={handleSearch}>
            <input
              className="border-2 h-10  w-full  rounded-l-lg  px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              id="Movie"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a movie"
            />
            <button
              type="button"
              className="bg-blue-500 inline-flex cursor-pointer hover:bg-blue-400 text-white font-bold py-2 px-5 rounded-r-full"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Discover;
