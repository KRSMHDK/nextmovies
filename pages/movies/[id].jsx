/* eslint-disable react/prop-types */
import React from 'react';
import MovieItem from '../../components/movie/MovieItem';
import Actors from '../../components/movie/Actors';
import MovieAPI from '../api/MovieAPI';
import Media from '../../components/movie/Media';

function MoviePage({ movieDetails, actorsDetails }) {
  return (
    <>
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
