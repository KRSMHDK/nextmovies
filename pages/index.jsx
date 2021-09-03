import Head from 'next/head';
import React from 'react';
import Discover from '../components/home/discover/discover';
import PopularMenu from '../components/home/popular/popular-menu';
import PopularTrailer from '../components/home/trailers/latest-trailer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Movies</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Discover />
      <PopularMenu />
      <PopularTrailer />
    </div>
  );
}
