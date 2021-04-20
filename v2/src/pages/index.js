import React from 'react'
import Quote from '../components/Quote'
import { pageNormalizer, commonPageFragment } from '../queries/page'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const Index = ({ data: { contentfulPage } }) => {
  console.log('Index', contentfulPage)
  const page = pageNormalizer(contentfulPage)

  return (
    <Layout pageTitle={page.title}>
      <Quote className={`homePage ${page.theme}`} subject={page} />
    </Layout>
  )
}

export default Index

export const query = graphql`
  query homePageQuery {
    contentfulPage(slug: { eq: "home" }) {
      ...commonPageFragment
    }
  }
`
