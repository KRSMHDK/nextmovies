import Head from 'next/head';
import React from 'react';
import Discover from '../components/home/discover/Discover';
import PopularMenu from '../components/home/popular/PopularMenu';
import PopularTrailer from '../components/home/trailers/LatestTrailer';

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
