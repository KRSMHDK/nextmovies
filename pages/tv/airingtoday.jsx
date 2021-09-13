import React from 'react';
import Head from 'next/head';
import TvAPI from '../api/TvAPI';
import CategoryViewer from '../../components/viewer/CategoryViewer';

function AiringTodayTv({ airingToday }) {
  return (
    <>
      <Head>
        <title>Airing Today Tv Series- NextMovies</title>
      </Head>
      <CategoryViewer
        results={airingToday}
        id="tv"
        category="airingtoday"
        type="TV Shows Airing Today"
      />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { page } = query;
  const airingToday = await TvAPI.getTvAiringToday(page);

  if (airingToday === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      airingToday: airingToday.data,
    },
  };
}
export default AiringTodayTv;
