import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function MainHeader() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={` -z-50  flex flex-wrap items-center w-full h-16    bg-header`}>
      <nav
        className={`fixed z-50  flex transition-all duration-500 flex-wrap items-center w-full h-16   md:pl-80 bg-header  ${
          scrollY > 150 ? '-top-60' : 'top-0'
        }`}
      >
        {console.log(scrollY)}
        <div className="flex mr-6 ">
          <Link passHref href="/">
            <a className="text-4xl font-bold tracking-wider text-transparent to-green-600 bg-clip-text bg-gradient-to-r from-blue-500">
              NXDB
            </a>
          </Link>
        </div>
        <div className="p-4">
          <div className="relative group">
            <button className="font-semibold text-white ">Movies</button>
            <nav className="absolute left-0 z-50 invisible max-w-xl transition-all bg-white border-2 rounded-lg opacity-0 top-full group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
              <ul className="py-1 ">
                <li>
                  <a href="/movie/popular" className="block px-4 py-2 hover:bg-gray-100">
                    Popular
                  </a>
                </li>
                <li>
                  <a href="/movie/upcoming" className="block px-4 py-2 hover:bg-gray-100">
                    Upcoming
                  </a>
                </li>
                <li>
                  <a
                    href="/movie/toprated"
                    className="block px-4 py-2 whitespace-nowrap hover:bg-gray-100"
                  >
                    Top Rated
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="relative group">
          <button className="font-semibold text-white ">Tv Shows</button>
          <nav className="absolute left-0 z-50 invisible max-w-xl transition-all bg-white border-2 rounded-lg opacity-0 top-full group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
            <ul className="py-1 ">
              <li>
                <a
                  href="/tv/popular"
                  className="block px-4 py-2 whitespace-nowrap hover:bg-gray-100"
                >
                  Popular
                </a>
              </li>
              <li>
                <a
                  href="/tv/airingtoday"
                  className="block px-4 py-2 whitespace-nowrap hover:bg-gray-100"
                >
                  Airing Today
                </a>
              </li>
              <li>
                <a href="/tv/ontv" className="block px-4 py-2 whitespace-nowrap hover:bg-gray-100">
                  On TV
                </a>
              </li>
              <li>
                <a
                  href="/tv/toprated"
                  className="block px-4 py-2 whitespace-nowrap hover:bg-gray-100"
                >
                  Top Rated
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
}

export default MainHeader;
