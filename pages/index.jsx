/* eslint-disable react/prop-types */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import Head from 'next/head';
import React from 'react';
import Discover from '../components/home/discover/Discover';
import PopularMenu from '../components/home/popular/PopularMenu';
import PopularTrailer from '../components/home/trailers/LatestTrailer';
import MovieAPI from './api/MovieAPI';

// eslint-disable-next-line object-curly-newline
export default function Home({ popularMovies, upcomingMovies, topRatedMovies, latestTrailer }) {
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
      <PopularTrailer latestTrailer={latestTrailer} />
    </div>
  );
}

export async function getStaticProps() {
  const popularMovies = await MovieAPI.getPopularMovies();
  const upcomingMovies = await MovieAPI.getUpcomingMovies();
  const topRatedMovies = await MovieAPI.getTopRatedMovies();

  const latestTrailerId = await upcomingMovies.data.results.map((movie) => movie.id);

  const latestTrailerPromise = await Promise.all(
    latestTrailerId.map((id) => MovieAPI.getUpcomingTrailer(id)),
  );

  const latestTrailer = latestTrailerPromise.map((a) => a.data);

  return {
    props: {
      popularMovies: popularMovies.data,
      upcomingMovies: upcomingMovies.data,
      topRatedMovies: topRatedMovies.data,
      latestTrailer,
    },
  };
}
