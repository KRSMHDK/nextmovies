import React, { useState, useEffect } from 'react'

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
    <div>
      {console.log(results)}
      {results.data.results.map((r) => (
        <p key={r.id}>{r.title}</p>
      ))}
    </div>
  )
}

export default search
