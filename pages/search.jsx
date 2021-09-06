import React, { useState, useEffect } from 'react';
import SearchResults from '../components/search/SearchResults';

function search() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      const last = window.location.href.split('?').pop();
      const res = await fetch('/api/search-api', { method: 'POST', body: last });
      const data = await res.json();

      setResults(data);
    };
    fetchResults();
  }, []);

  if (results === null) {
    return <div />;
  }

  return (
    <>
      <SearchResults results={results} />
    </>
  );
}

export default search;
