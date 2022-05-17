import React from 'react'
import Head from '../components/Head'
import Header from './header'
import Footer from './footer'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../@chakra-ui/gatsby-plugin/theme'

function Layout({ children }) {
  return (
    <>
      <Head />
      <ChakraProvider theme={theme}>
        <Header />
          <main>{children}</main>
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default Layout