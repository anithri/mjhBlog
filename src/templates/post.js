import React from 'react'
import PropTypes from 'prop-types'
import PostArticle from '../components/PostArticle'

const PostPage = ({ post, skin }) => {
  // TODO Also return a post navigation section
  return (
    <PostArticle post={post} className={`postPage ${skin}`}/>
  )
}

PostPage.propTypes = {
  className: PropTypes.string,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    body: PropTypes.shape({
      childMarkdown: PropTypes.shape({
        html: PropTypes.string.isRequired,
      })
    }),
    dateTime: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
    theme: {
      skin: propTypes.string.isRequired,
    }
  }),
}

export default Post

export const PostQuery = graphql`
  query PostPageQuery($id: String!) {
    contentfulPost(id: {eq: $id}) {
      slug
      title
      dateTime: publishOn(formatString: "YYYY-MM-DD")
      publishDate: publishOn(formatString: "LL")
      body {
        childMarkdownRemark{
          html
        }
      }
      theme {
        skin
      }
    }
  }
`
