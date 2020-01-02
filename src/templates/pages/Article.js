import React from 'react'
import Article from '../../components/Article'
import { graphql } from 'gatsby'
import { commonPageFragment, pageNormalizer } from '../../queries/page'
import Layout from '../../components/Layout'

const PageArticle = ({ data: { contentfulPage } }) => {
  console.log('PageArticle', contentfulPage)
  const page = pageNormalizer((contentfulPage))
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
    contentfulPage(contentful_id: { eq: $contentful_id }) {
      ...commonPageFragment
    }
  }
`

export default PageArticle
