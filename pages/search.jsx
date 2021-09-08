import React from 'react';
import SearchResults from '../components/search/SearchResults';
import MovieAPI from './api/MovieAPI';

// eslint-disable-next-line react/prop-types
function Search({ movieList }) {
  return (
    <>
      <SearchResults results={movieList} />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const search = query.query;
  const res = await MovieAPI.getSearchMovieList(search);

  return {
    props: { movieList: res.data },
  };
}
export default Search;
