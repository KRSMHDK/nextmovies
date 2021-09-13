import React from 'react';
import Head from 'next/head';
import MovieAPI from '../api/MovieAPI';
import CategoryViewer from '../../components/viewer/CategoryViewer';

function MoviePopularPage({ upcomingMovies }) {
  return (
    <>
      <Head>
        <title>Upcoming Movies - NextMovies</title>
      </Head>
      <CategoryViewer results={upcomingMovies} category="upcoming" type="Upcoming" />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { page } = query;
  const upcomingMovies = await MovieAPI.getUpcomingMovies(page);

  if (upcomingMovies === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      upcomingMovies: upcomingMovies.data,
    },
  };
}
export default MoviePopularPage;
