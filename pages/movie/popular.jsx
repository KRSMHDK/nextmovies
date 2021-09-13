import React from 'react';
import Head from 'next/head';
import MovieAPI from '../api/MovieAPI';
import CategoryViewer from '../../components/viewer/CategoryViewer';

function MoviePopularPage({ popularMovies }) {
  return (
    <>
      <Head>
        <title>Popular Movies - NextMovies</title>
      </Head>
      <CategoryViewer results={popularMovies} />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { page } = query;
  const popularMovies = await MovieAPI.getPopularMovies(page);

  if (popularMovies === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      popularMovies: popularMovies.data,
    },
  };
}
export default MoviePopularPage;
