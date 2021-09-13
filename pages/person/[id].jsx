import React from 'react';
import Head from 'next/head';
import PersonAPI from '../api/PersonAPI';
import PersonViewer from '../../components/viewer/PersonViewer';

function PersonPage({ personDetails }) {
  return (
    <>
      <Head>
        <title>{personDetails.name} - NextMovies</title>
      </Head>

      <PersonViewer person={personDetails} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const personDetails = await PersonAPI.getPersonById(id);

  if (personDetails === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      personDetails: personDetails.data,
    },
  };
}
export default PersonPage;
