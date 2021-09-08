/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import MovieItem from '../../components/movie/MovieItem';
import Actors from '../../components/movie/Actors';
import MovieAPI from '../api/MovieAPI';
import Media from '../../components/movie/Media';

function MoviePage({ movieDetails, actorsDetails }) {
  return (
    <>
      <Head>
        <title>{movieDetails.title} - NextMovies</title>
      </Head>
      <MovieItem moviedetails={movieDetails} />
      <Actors actors={actorsDetails} />
      <Media movieDetails={movieDetails} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const movieDetails = await MovieAPI.getMovieById(id);
  const actorsDetails = await MovieAPI.getActorsByMovieId(id);

  if (movieDetails === 404 || actorsDetails === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: { movieDetails: movieDetails.data, actorsDetails: actorsDetails.data },
  };
}
export default MoviePage;
