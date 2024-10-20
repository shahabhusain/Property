import React from 'react'
import Header from '../(Auth)/Header'
import Footer from '../(Auth)/Footer'
const layout = ({children}) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
        </div>
  )
}

export default layout