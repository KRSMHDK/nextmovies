import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function MainHeader() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={` -z-50    transition-all duration-700 flex flex-wrap items-center w-full h-16 bg-header ${
        scrollY > 90 ? '-top-60' : 'top-0'
      }`}
    >
      <div
        className={` z-50  fixed  transition-all duration-700  flex-wrap items-center w-full h-16 bg-header ${
          scrollY > 90 ? '-top-60' : 'top-0'
        }`}
      >
        <div className="container mx-auto">
          <nav
            className={`fixed z-50  flex transition-all duration-700 flex-wrap items-center w-full h-16 pl-5  md:px-36 bg-header  ${
              scrollY > 90 ? '-top-60' : 'top-0'
            }`}
          >
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
                    <a
                      href="/tv/ontv"
                      className="block px-4 py-2 whitespace-nowrap hover:bg-gray-100"
                    >
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
      </div>
    </div>
  );
}

export default MainHeader;
