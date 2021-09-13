import Link from 'next/link';
import React from 'react';

function MainHeader() {
  return (
    <nav className="flex flex-wrap items-center h-16 pl-12 md:pl-80 bg-header">
      <div className="flex mr-6 ">
        <Link passHref href="/">
          <a className="text-2xl font-semibold tracking-tight text-transparent to-green-600 bg-clip-text bg-gradient-to-r from-red-500">
            Next Movies
          </a>
        </Link>
      </div>
      <div className="p-4">
        <div className="relative group">
          <button className="font-semibold text-white ">Movies</button>
          <nav className="absolute left-0 z-50 invisible max-w-xl transition-all bg-white border-2 rounded-lg opacity-0 top-full group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
            <ul className="py-1 ">
              <li>
                <Link href="/movie/popular">
                  <a className="block px-4 py-2 hover:bg-gray-100">Popular</a>
                </Link>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Upcoming
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 whitespace-nowrap hover:bg-gray-100">
                  Top Rated
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default MainHeader;
