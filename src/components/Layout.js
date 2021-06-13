import React from 'react'
import Home from '../pages/Home'

const Layout = ({children}) => {
  return(
    <Home>
      {children}
    </Home>
  )
}

export default Layout