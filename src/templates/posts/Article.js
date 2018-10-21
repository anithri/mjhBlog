import React from 'react'
import Helmet from 'react-helmet'
import Article from '../../components/Article'
import Link from 'gatsby-link'
import postContainer, {
  contentfulPostShape,
  postLinkContainer,
} from '../../containers/post'
import PropTypes from 'prop-types'
import Feedback from '../../components/Feedback'
import withToggle from '../../containers/toggle'
import times from '../../images/times-solid.svg'

const PostsNavDisplay = ({ next, prev, toggledOn, toggle }) => (
  <nav className="postNav">
    <ul>
      {(prev && <li><Link to={prev.slugPath} title={prev.title}>Previous</Link></li>) || null}
      <li><Link to="/writings">All Entries</Link></li>
      <li onClick={toggle} className='feedback'>
        Feedback
      </li>
      {(next && <li><Link to={next.slugPath} alt={next.title}>Next</Link></li>) || null}
    </ul>
    {toggledOn && <Feedback toggle={toggle} />}
  </nav>
)

const PostsNav = withToggle(PostsNavDisplay)

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
