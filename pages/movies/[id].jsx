import React, { useEffect, useState } from 'react';

import MovieItem from '../../components/movie/movie-item';
import Actors from '../../components/movie/actors';

function MoviePage() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieYoutube, setMovieYoutube] = useState(null);
  const [actors, setActors] = useState(null);

  useEffect(() => {
    async function fetchMyApi() {
      const last = window.location.href.split('/').pop();

      const movieDetailsFetch = await fetch('/api/singleMovieAPI', { method: 'POST', body: last });

      const movieYoutubeFetch = await fetch('/api/singleMovieYoutubeAPI', {
        method: 'POST',
        body: last,
      });

      const actorsFetch = await fetch('/api/actorsAPI', { method: 'POST', body: last });

      const actorsDetails = await actorsFetch.json();
      const dataMovieDetails = await movieDetailsFetch.json();
      const dataMovieYoutube = await movieYoutubeFetch.json();

      setActors(actorsDetails.data);
      setMovieDetails(dataMovieDetails.data);
      setMovieYoutube(dataMovieYoutube.data);
    }

    fetchMyApi();
  }, []);

  if (movieDetails === null || movieYoutube === null || actors === null) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
  return (
    <>
      <MovieItem moviedetails={movieDetails} movieyoutube={movieYoutube} />
      <Actors actors={actors} />
    </>
  );
}

export default MoviePage;
