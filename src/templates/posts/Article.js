import React from 'react'
import Helmet from 'react-helmet'
import Article from '../../components/Article'
import Link from 'gatsby-link'
import { postNormalizer, postLinkNormalizer } from '../../queries/post'
import Feedback from '../../components/Feedback'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

const PostsNavDisplay = ({ next, prev, toggledOn, toggle }) => (
  <nav className="postNav">
    <ul>
      {(prev && (
        <li>
          <Link to={prev.slugPath} title={prev.title}>
            Previous
          </Link>
        </li>
      )) ||
        null}
      <li>
        <Link to="/writings">All Entries</Link>
      </li>
      <li onClick={toggle} className="feedback">
        Feedback
      </li>
      {(next && (
        <li>
          <Link to={next.slugPath} alt={next.title}>
            Next
          </Link>
        </li>
      )) ||
        null}
    </ul>
    <Feedback toggle={toggle} toggledOn={toggledOn} />
  </nav>
)

const PostsNav = withToggle(PostsNavDisplay)

const PostArticle = ({ data: { nextPost, prevPost, currentPost } }) => {
  const next = (nextPost && postLinkNormalizer(nextPost, 'Next')) || null
  const prev = (prevPost && postLinkNormalizer(prevPost, 'Prev')) || null
  const post = postNormalizer(currentPost)

  return (
    <Layout pageTitle={post.title}>
      <Article
        subject={post}
        next={next}
        prev={prev}
        className={`${post.theme} postArticle`}
      >
        <PostsNav next={next} prev={prev} />
      </Article>
    </Layout>
  )
}

export const query = graphql`
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

export default PostArticle
