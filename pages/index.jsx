/* eslint-disable react/prop-types */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import Head from 'next/head';
import React from 'react';
import Discover from '../components/home/discover/Discover';
import PopularMenu from '../components/home/popular/PopularMenu';
import PopularTVList from '../components/home/popular/PopularTVList';
import PopularTrailer from '../components/home/trailers/LatestTrailer';
import MovieAPI from './api/MovieAPI';
import TvAPI from './api/TvAPI';

// eslint-disable-next-line object-curly-newline
export default function Home({
  popularMovies,
  upcomingMovies,
  topRatedMovies,
  latestTrailer,
  popularTV,
}) {
  return (
    <div>
      <Head>
        <title>Next Movies</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="search millions of movies" />
      </Head>
      <Discover />
      <PopularMenu
        popularMovies={popularMovies}
        upcomingMovies={upcomingMovies}
        topRatedMovies={topRatedMovies}
      />
      <PopularTrailer latestTrailer={latestTrailer} />
      <PopularTVList tvs={popularTV} />
    </div>
  );
}

export async function getStaticProps() {
  const popularMovies = await MovieAPI.getPopularMovies();
  const upcomingMovies = await MovieAPI.getUpcomingMovies();
  const topRatedMovies = await MovieAPI.getTopRatedMovies();

  const popularTV = await TvAPI.getPopularTv();
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
      popularTV: popularTV.data,
      latestTrailer,
    },
  };
}
