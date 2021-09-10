import React from 'react';
import Head from 'next/head';
import MovieAPI from '../api/MovieAPI';
import Recommendations from '../../components/viewer/Recommendations';
import ItemViewer from '../../components/viewer/ItemViewer';
import CastViewer from '../../components/viewer/CastViewer';
import MediaViewer from '../../components/viewer/MediaViewer';

function MoviePage({ movieDetails, castDetails, recommendations }) {
  return (
    <>
      <Head>
        <title>{movieDetails.title} - NextMovies</title>
      </Head>

      <ItemViewer details={movieDetails} />
      <CastViewer cast={castDetails} />
      <MediaViewer details={movieDetails} />
      <Recommendations recommendations={recommendations} type="movie" />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const movieDetails = await MovieAPI.getMovieById(id);
  const castDetails = await MovieAPI.getCastByMovieId(id);
  const recommendations = await MovieAPI.getRecommendationByMovieID(id);

  if (movieDetails === 404 || castDetails === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movieDetails: movieDetails.data,
      castDetails: castDetails.data,
      recommendations: recommendations.data,
    },
  };
}
export default MoviePage;
