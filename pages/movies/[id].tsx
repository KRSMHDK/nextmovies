import React from 'react';

import MovieItem from '../../components/movie/movie-item';
import Actors from '../../components/movie/actors';
import MovieAPI from '../api/MovieAPI';

function MoviePage({ movieDetails, actorsDetails }) {
  return (
    <>
      <MovieItem moviedetails={movieDetails} />
      <Actors actors={actorsDetails} />
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
