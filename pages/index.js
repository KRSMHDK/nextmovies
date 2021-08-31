import Head from 'next/head'
import Discover from '../components/movie/discover'

import MovieList from '../components/movie/movie-list'
import PopularMenu from '../components/movie/popular-menu'

export async function getStaticProps() {
  const pop = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  )
  const trated = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
  )
  const coming = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
  )
  const popular = await pop.json()
  const toprated = await trated.json()
  const upcoming = await coming.json()

  return {
    props: { popular, toprated, upcoming },
    revalidate: 600,
  }
}

export default function Home({ popular, toprated, upcoming }) {
  return (
    <div>
      {console.log(popular)}
      <Discover />
      <PopularMenu popular={popular} toprated={toprated} upcoming={upcoming} />
    </div>
  )
}
