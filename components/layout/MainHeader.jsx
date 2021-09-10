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
      <div className="flex items-center flex-grow w-auto text-sm text-white">
        <Link passHref href="/">
          <a className="block mr-4 font-semibold">Movies</a>
        </Link>
      </div>
    </nav>
  );
}

export default MainHeader;
