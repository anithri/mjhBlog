import React from 'react'
import Helmet from 'react-helmet'
import { postNormalizer, commonPostFragment } from '../../queries/post'
import Quote from '../../components/Quote'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

const PostQuote = ({ data: { contentfulPost } }) => {
  const post = postNormalizer(contentfulPost)

  return (
    <Layout pageTitle={post.title}>
      <Quote post={post} className={`${post.theme} postQuote`} />
    </Layout>
  )
}

export const query = graphql`
  query PostQuoteQuery($contentful_id: String!) {
    contentfulPost(contentful_id: { eq: $contentful_id }) {
      ...commonPostFragment
    }
  }
`
export default PostQuote
