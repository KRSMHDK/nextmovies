import React from 'react'
import MainHeader from './main-header'

function Layout(props) {
  return (
    <div>
      <MainHeader />
      <div>{props.children}</div>
    </div>
  )
}

export default Layout
