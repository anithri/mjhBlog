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

QuotePost.propTypes = {
  data: {
    contentfulPost: contentfulShape,
  },
}

export default PostQuote

export const QuotePostQuery = graphql`
  query QuotePostQuery($id: String!) {
    contentfulPost(id: { eq: $id }) {
      ...commonPostProps
    }
  }
`
