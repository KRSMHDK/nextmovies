import React, { useEffect, useState } from 'react';

import MovieItem from '../../components/movie/movie-item';

function MoviePage() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieYoutube, setMovieYoutube] = useState(null);

  useEffect(() => {
    async function fetchMyApi() {
      const last = window.location.href.split('/').pop();

      const movieDetailsFetch = await fetch(
        `https://api.themoviedb.org/3/movie/${last}?api_key=c23ca659c06dfcb43fa6f25e4eeadfa3&language=en-US`,
      );
      const movieYoutubeFetch = await fetch(
        `https://api.themoviedb.org/3/movie/${last}/videos?api_key=c23ca659c06dfcb43fa6f25e4eeadfa3&language=en-US`,
      );
      const dataMovieDetails = await movieDetailsFetch.json();
      const dataMovieYoutube = await movieYoutubeFetch.json();
      setMovieDetails(dataMovieDetails);
      setMovieYoutube(dataMovieYoutube);
    }

    fetchMyApi();
  }, []);

  if (movieDetails === null || movieYoutube === null) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
  return (
    <>
      <MovieItem moviedetails={movieDetails} movieyoutube={movieYoutube} />
    </>
  );
}

export default MoviePage;
