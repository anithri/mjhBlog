import React from 'react'
import Quote from '../../components/Quote'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

const PageQuote = ({ data}) => {
  console.log('PageQuote', data)
  const { page } = data
  return (
    <Layout pageTitle={page.title}>
      <Quote subject={page} className={`pageQuote ${theme}`} />
    </Layout>
  )
}

export const query = graphql`
  query PageQuoteQuery($contentful_id: String!) {
    page: contentfulPage(contentful_id: { eq: $contentful_id }) {
      ...commonPageFragment
    }
  }
`

export default PageQuote
