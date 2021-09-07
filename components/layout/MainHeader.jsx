import Link from 'next/link';
import React from 'react';

function MainHeader() {
  return (
    <nav className="flex flex-wrap items-center h-16 bg-header ">
      <div className="flex mr-6 text-red-600">
        <img className="w-8 h-8 mr-2 md:ml-52" src="/logo.png" alt="" />
        <Link passHref href="/">
          <button type="button" className="text-2xl font-semibold tracking-tight">
            Next Movies
          </button>
        </Link>
      </div>
      <div className="flex items-center flex-grow w-auto text-xl text-white">
        <Link passHref href="/">
          <button type="button" className="block mr-4 text-base">
            Movies
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default MainHeader;
