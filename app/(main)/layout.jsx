import React from 'react'
import Header from '../(main)/Heder'
import Footer from '../(main)/Footer'
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