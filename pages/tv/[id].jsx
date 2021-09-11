import React from 'react';
import Head from 'next/head';
import ItemViewer from '../../components/viewer/ItemViewer';
import TvAPI from '../api/TvAPI';
import CastViewer from '../../components/viewer/CastViewer';
import Recommendations from '../../components/viewer/Recommendations';
import MediaViewer from '../../components/viewer/MediaViewer';

function TvPage({ tvDetails, castTvDetails, similarTvDetails, countryCode }) {
  return (
    <>
      <Head>
        <title>{tvDetails.name} - NextMovies</title>
      </Head>

      <ItemViewer details={tvDetails} countryCode={countryCode} type="tv" />
      <CastViewer cast={castTvDetails} />
      <MediaViewer details={tvDetails} />
      <Recommendations recommendations={similarTvDetails} type="tv" />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const tvDetails = await TvAPI.getTvById(id);
  const castTvDetails = await TvAPI.getCastByTvId(id);
  const similarTvDetails = await TvAPI.getSimilarMovieByTvId(id);

  const countryCode = await fetch('https://extreme-ip-lookup.com/json/').then((res) => res.json());

  if (tvDetails === 404 || castTvDetails === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      tvDetails: tvDetails.data,
      castTvDetails: castTvDetails.data,
      similarTvDetails: similarTvDetails.data,
      countryCode: countryCode.countryCode,
    },
  };
}

export default TvPage;
