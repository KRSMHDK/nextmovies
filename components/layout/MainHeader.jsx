import Link from 'next/link';
import React from 'react';

function MainHeader() {
  return (
    <nav className="flex flex-wrap items-center h-16  md:pl-80 bg-header">
      <div className="flex mr-6 ">
        <img className="w-8 h-8 mr-2 " src="/logo.png" alt="" />
        <Link passHref href="/">
          <button
            type="button"
            className="text-2xl font-semibold tracking-tight text-transparent to-green-600 bg-clip-text bg-gradient-to-r from-red-500"
          >
            Next Movies
          </button>
        </Link>
      </div>
      <div className="flex items-center flex-grow w-auto text-sm text-white">
        <Link passHref href="/">
          <button type="button" className="block mr-4 font-semibold">
            Movies
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default MainHeader;
