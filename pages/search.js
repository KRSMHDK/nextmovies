import React, { useState, useEffect } from 'react'
import SearchResults from '../components/search/search-results'
function search() {
  const [results, setResults] = useState(null)

  useEffect(() => {
    const fetchResults = async (page) => {
      const last = window.location.href.split('?').pop()
      const res = await fetch(`/api/search`, { method: 'POST', body: last }) // notice the naming
      const data = await res.json()

      setResults(data)
    }
    fetchResults()
  }, [])

  if (results === null) {
    return <div> </div>
  }
  return (
    <>
      <SearchResults results={results} />
    </>
  )
}

export default search
