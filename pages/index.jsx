import React from 'react';
import Discover from '../components/home/discover/discover';
import PopularMenu from '../components/home/popular/popular-menu';
import PopularTrailer from '../components/home/trailers/latest-trailer';

export default function Home() {
  return (
    <div>
      <Discover />
      <PopularMenu />
      <PopularTrailer />
    </div>
  );
}
