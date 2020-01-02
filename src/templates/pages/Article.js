import React from 'react'
import Helmet from 'react-helmet'
import Article from '../../components/Article'
import { graphql } from 'gatsby'
import { commonPageFragment } from '../../queries/page'
import Layout from '../../components/Layout'

const PageArticle = ({ data: { page } }) => {
  return (
    <Layout pageTitle={page.title}>
      <Article
        subject={page}
        className={`pageArticle ${page.theme} ${page.slug}Page`}
      />
    </Layout>
  )
}

export const query = graphql`
  query PageArticleQuery($contentful_id: String!) {
    page: contentfulPage(contentful_id: { eq: $contentful_id }) {
      ...commonPageFragment
    }
  }
`

export default PageArticle
