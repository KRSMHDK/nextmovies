/* eslint-disable react/prop-types */
import Head from 'next/head';
import React from 'react';
import Discover from '../components/home/discover/Discover';
import PopularMenu from '../components/home/popular/PopularMenu';
import PopularTrailer from '../components/home/trailers/LatestTrailer';
import MovieAPI from './api/MovieAPI';

export default function Home({ popularMovies, upcomingMovies, topRatedMovies }) {
  return (
    <div>
      <Head>
        <title>Next Movies</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Discover />
      <PopularMenu
        popularMovies={popularMovies}
        upcomingMovies={upcomingMovies}
        topRatedMovies={topRatedMovies}
      />
      <PopularTrailer />
    </div>
  );
}

export async function getStaticProps() {
  const popularMovies = await MovieAPI.getPopularMovie();
  const upcomingMovies = await MovieAPI.getUpcoming();
  const topRatedMovies = await MovieAPI.getTopRated();

  return {
    props: {
      popularMovies: popularMovies.data,
      upcomingMovies: upcomingMovies.data,
      topRatedMovies: topRatedMovies.data,
    }, // will be passed to the page component as props
  };
}
