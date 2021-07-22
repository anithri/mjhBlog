import React from 'react'
import Helmet from 'react-helmet'
import PostHome from '../components/posts/Home'
import { pageNormalizer, commonPageFragment } from '../queries/page'
import { postNormalizer, commonPostFragment } from '../queries/post'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const BlogHomePage = props => {
  console.log('Blog Home Page', props)
  const {
    data: { allContentfulPost, contentfulPage },
  } = props
  const posts = allContentfulPost.posts.map(({ post }) => postNormalizer(post))
  const page = pageNormalizer(contentfulPage)

  return (
    <Layout pageTitle={page.title}>
      <PostHome posts={posts} page={page} className={page.theme} />
    </Layout>
  )
}

export default BlogHomePage

// BlogHomePage.propTypes = {
//   data: {
//     contentfulPage: contentfulPageShape,
//     allContentfulPost: PropTypes.arrayOf(contentfulPostShape)
//   }
// }

export const query = graphql`
  query BlogHomePageQuery {
    contentfulPage(slug: { eq: "blog" }) {
      ...commonPageFragment
    }
    allContentfulPost(
      sort: { fields: [publishOn], order: DESC }
      filter: { publishOn: { ne: null } }
    ) {
      posts: edges {
        post: node {
          ...commonPostFragment
        }
      }
    }
  }
`
