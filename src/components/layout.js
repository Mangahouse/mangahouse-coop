import React from 'react'
import Head from '../components/Head'
import Header from './header'
import Footer from './footer'

function Layout({ children }) {
  return (
    <>
      <Head />
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout