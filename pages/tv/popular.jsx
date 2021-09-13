import React from 'react';
import Head from 'next/head';
import TvAPI from '../api/TvAPI';
import CategoryViewer from '../../components/viewer/CategoryViewer';

function PopularTV({ popularTv }) {
  return (
    <>
      <Head>
        <title>Popular Tv Series - NextMovies</title>
      </Head>
      <CategoryViewer results={popularTv} id="tv" category="popular" type="Popular Tv Series" />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { page } = query;
  const popularTv = await TvAPI.getPopularTv(page);

  if (popularTv === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      popularTv: popularTv.data,
    },
  };
}
export default PopularTV;
