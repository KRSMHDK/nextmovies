import Head from 'next/head'
import Discover from '../components/movie/discover'

import PopularMenu from '../components/movie/popular-menu'

export default function Home({}) {
  return (
    <div>
      <Discover />
      <PopularMenu />
    </div>
  )
}
