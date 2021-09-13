import React from 'react';
import Head from 'next/head';
import TvAPI from '../api/TvAPI';
import CategoryViewer from '../../components/viewer/CategoryViewer';

function OnTv({ onTv }) {
  return (
    <>
      <Head>
        <title>Airing Today Tv Series- NextMovies</title>
      </Head>
      <CategoryViewer results={onTv} id="tv" category="ontv" type="Currently Airing TV Shows" />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { page } = query;
  const onTv = await TvAPI.getOnTv(page);

  if (onTv === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      onTv: onTv.data,
    },
  };
}
export default OnTv;
