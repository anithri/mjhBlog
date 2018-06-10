import React from 'react'
import Helmet from 'react-helmet'
import Article from '../../components/Article'
import Link from 'gatsby-link'
import postContainer, {
  contentfulPostShape,
  postLinkContainer,
} from '../../containers/post'
import PropTypes from 'prop-types'
import PostLink from '../../components/posts/PostLink'

const PostsNav = ({next, prev}) => (
  <nav className="postNav">
    <ul >
      {(prev && <li><PostLink post={prev} title="Previous" /></li>) || null}
      <li><Link to="/writings">All Entries</Link></li>
      {(next && <li><PostLink post={next} title="Next" /></li>) || null}
    </ul>
  </nav>
)

const PostArticle = props => {
  const {
    data: { currentPost, nextPost, prevPost },
  } = props

  const next = (nextPost && postLinkContainer(nextPost, 'Next')) || null
  const prev = (prevPost && postLinkContainer(prevPost, 'Prev')) || null
  const post = postContainer(currentPost)

  return (
    <Article
      subject={post}
      next={next}
      prev={prev}
      className={`${post.theme} postArticle`}
    >
      <Helmet title={post.title} />
      <PostsNav next={next} prev={prev} />
    </Article>
  )
}

PostArticle.propTypes = {
  data: PropTypes.shape({
    contentfulPost: contentfulPostShape,
  }),
}

export default PostArticle

export const PostArticleQuery = graphql`
  query PostArticleQuery(
    $contentful_id: String!
    $next_post_id: String
    $prev_post_id: String
  ) {
    currentPost: contentfulPost(contentful_id: { eq: $contentful_id }) {
      ...commonPostFragment
    }
    nextPost: contentfulPost(contentful_id: { eq: $next_post_id }) {
      ...commonPostLinkFragment
    }
    prevPost: contentfulPost(contentful_id: { eq: $prev_post_id }) {
      ...commonPostLinkFragment
    }
  }
`
