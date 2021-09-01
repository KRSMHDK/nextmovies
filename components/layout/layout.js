import React from 'react'
import MainHeader from './main-header'
import Footer from './footer'

function Layout(props) {
  return (
    <div>
      <MainHeader />
      <div>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
