import React from 'react'
import Layout from '../components/layout'
import Main from '../components/Main'
import { graphql } from 'gatsby'

export default function Home() {
  return (
    <Layout>
      <Main />
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`