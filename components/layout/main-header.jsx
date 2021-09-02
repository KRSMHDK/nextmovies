import Link from 'next/link';
import React from 'react';

function MainHeader() {
  return (
    <nav className=" flex items-center flex-wrap bg-gray-900 p-6 ">
      <div className="flex text-red-600 mr-6">
        <img className="h-8 w-8 mr-2 md:ml-52" src="/logo.png" alt="" />
        <Link passHref href="/">
          <button type="button" className="font-semibold  text-2xl tracking-tight">
            Next Movies
          </button>
        </Link>
      </div>
      <div className="flex items-center w-auto flex-grow text-xl text-white">
        <Link passHref href="/">
          <button type="button" className="block text-base mr-4">
            Movies
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default MainHeader;
