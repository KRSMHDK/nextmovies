import React from 'react';
import Head from 'next/head';
import TvAPI from '../api/TvAPI';
import CategoryViewer from '../../components/viewer/CategoryViewer';

function TopRatedTv({ topRatedTv }) {
  return (
    <>
      <Head>
        <title>Airing Today Tv Series- NextMovies</title>
      </Head>
      <CategoryViewer results={topRatedTv} id="tv" category="toprated" type="Top Rated TV Shows" />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { page } = query;
  const topRatedTv = await TvAPI.getTopRatedTv(page);

  if (topRatedTv === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      topRatedTv: topRatedTv.data,
    },
  };
}
export default TopRatedTv;
