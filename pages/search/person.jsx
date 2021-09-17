import React from 'react';
import SearchResults from '../../components/search/SearchResults';
import SearchAPI from '../api/SearchAPI';

function Search({ movieList, tvList, personList, searchQuery }) {
  let allItems = [movieList, tvList, personList];
  const allItemsSorted = allItems.sort(function (a, b) {
    return b.total_results - a.total_results;
  });

  const pageTotal = Math.ceil(personList.total_results / 20);
  return (
    <>
      <SearchResults
        pageTotal={pageTotal}
        leftMenu={allItemsSorted}
        display={personList}
        type="Person"
        searchQuery={searchQuery}
      />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { page, search } = query;

  const movieList = await SearchAPI.getSearchMovieList(search, 1);
  const tvList = await SearchAPI.getSearchTvList(search, 1);
  const personList = await SearchAPI.getPersonList(search, page);

  movieList.data['type'] = 'Movie';
  tvList.data['type'] = 'Tv';
  personList.data['type'] = 'Person';

  return {
    props: {
      movieList: movieList.data,
      tvList: tvList.data,
      personList: personList.data,
      searchQuery: search,
    },
  };
}

export default Search;
