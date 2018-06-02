import React from 'react'
import Helmet from 'react-helmet'
import postContainer, { contentfulShape } from '../../containers/post'
import Quote from '../../components/Quote'

const PostQuote = ({ data: { contentfulPost } }) => {
  const post = postContainer(contentfulPost)
  return (
    <Quote post={post} className={`${post.skin} postQuote`}>
      <Helmet title={post.title} />
    </Quote>
  )
}

PostQuote.propTypes = {
  data: {
    contentfulPost: contentfulShape,
  },
}

export default PostQuote

export const PostQuoteQuery = graphql`
  query PostQuoteQuery($contentful_id: String!) {
    contentfulPost(contentful_id: { eq: $contentful_id}) {
      ...commonPostFragment
    }
  }
`
