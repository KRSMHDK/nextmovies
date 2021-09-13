import React from 'react';
import Head from 'next/head';
import MovieAPI from '../api/MovieAPI';
import CategoryViewer from '../../components/viewer/CategoryViewer';

function MoviePopularPage({ topRatedMovies }) {
  return (
    <>
      <Head>
        <title>Top Rated Movies - NextMovies</title>
      </Head>
      <CategoryViewer results={topRatedMovies} category="toprated" type="Top-Rated" />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { page } = query;
  const topRatedMovies = await MovieAPI.getTopRatedMovies(page);

  if (topRatedMovies === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      topRatedMovies: topRatedMovies.data,
    },
  };
}
export default MoviePopularPage;
