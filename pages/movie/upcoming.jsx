import React from 'react';
import Head from 'next/head';
import MovieAPI from '../api/MovieAPI';
import CategoryViewer from '../../components/viewer/CategoryViewer';

function MovieUpcomingPage({ upcomingMovies }) {
  return (
    <>
      <Head>
        <title>Upcoming Movies - NextMovies</title>
      </Head>
      <CategoryViewer
        results={upcomingMovies}
        id="movie"
        category="upcoming"
        type="Upcoming Movies"
      />
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
export default MovieUpcomingPage;
