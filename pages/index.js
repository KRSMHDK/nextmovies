import Head from 'next/head'
import Discover from '../components/movie/discover'

import PopularMenu from '../components/movie/popular-menu'
import PopularTrailer from '../components/movie/popular-trailer'

export default function Home({}) {
  return (
    <div>
      <Discover />
      <PopularMenu />
      <PopularTrailer />
    </div>
  )
}
