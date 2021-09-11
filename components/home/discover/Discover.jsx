import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

function Discover() {
  const [bgImage, setBgImage] = useState('');
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const bgImageRoll = {
      0: '/6t8ES1d12OzWyCGxBeDYLHoaDrT.jpg',
      1: '/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg',
      2: '/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg',
      3: '/nNmJRkg8wWnRmzQDe2FwKbPIsJV.jpg',
    };
    const picker = Math.floor(Math.random() * 4);
    setBgImage(bgImageRoll[picker]);
  }, []);

  function handleSearch(event) {
    event.preventDefault();
    router.push(`/search?page=1&search=${searchQuery}`);
  }
  return (
    <>
      <div className="relative z-50 w-full max-w-screen-xl mx-auto h-96 ">
        <Image
          className="bg-cover -z-10"
          layout="fill"
          src={`https://image.tmdb.org/t/p/w1280${bgImage}`}
          objectFit="cover"
          objectPosition="top"
          unoptimized={true}
        />
        <div className="w-full h-full pt-12 pr-12 md:pt-24 from-green-900/30 to-blue-900/60 bg-gradient-to-r pl-11">
          <p className="text-5xl text-white">Welcome.</p>

          <p className="text-3xl text-white ">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <form className="flex w-auto mt-10 p-auto " onSubmit={handleSearch}>
            <input
              className="z-10 w-full h-10 px-3 text-gray-700 border-2 rounded-l-lg focus:outline-none focus:shadow-outline"
              id="Movie"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a movie"
            />
            <button
              type="submit"
              className="z-10 inline-flex px-5 py-2 font-bold text-white bg-blue-500 rounded-r-full cursor-pointer hover:bg-blue-400"
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
