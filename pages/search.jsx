import React from 'react';
import SearchResults from '../components/search/SearchResults';
import MovieAPI from './api/MovieAPI';

// eslint-disable-next-line react/prop-types
function Search({ movieList, searchQuery }) {
  return (
    <>
      <SearchResults results={movieList} searchQuery={searchQuery} />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { search, page } = query;

  const res = await MovieAPI.getSearchMovieList(search, page);

  return {
    props: { movieList: res.data, searchQuery: search },
  };
}
export default Search;
