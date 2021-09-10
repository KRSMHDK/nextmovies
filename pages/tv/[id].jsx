/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import TvItem from '../../components/tv/TvItem';
import Actors from '../../components/tv/Actors';
import TvAPI from '../api/TvAPI';
import Media from '../../components/tv/Media';
// import Recommendations from '../../components/Recommendations';

function TvPage({ tvDetails, actorsTvDetails }) {
  return (
    <>
      <Head>
        <title>{tvDetails.name} - NextMovies</title>
      </Head>
      <TvItem tvdetails={tvDetails} />
      <Actors actors={actorsTvDetails} />
      <Media tvDetails={tvDetails} />
      {/* <Recommendations recommendations={similarTvDetails} /> */}
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const tvDetails = await TvAPI.getTvById(id);
  const actorsTvDetails = await TvAPI.getActorsByTvId(id);
  const similarTvDetails = await TvAPI.getSimilarMovieByTvId(id);

  if (tvDetails === 404 || actorsTvDetails === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      tvDetails: tvDetails.data,
      actorsTvDetails: actorsTvDetails.data,
      similarTvDetails: similarTvDetails.data,
    },
  };
}

export default TvPage;
