import React from 'react'
import Dex from '../components/posts/Dex'
/* eslint-disable-next-line */
import { pageNormalizer, commonPageFragment } from '../queries/page'
/* eslint-disable-next-line */
import { postNormalizer, commonPostFragment } from '../queries/post'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const BlogdexPage = props => {
  console.log('Blog dex Page', props)
  const {
    data: { allContentfulPost, contentfulPage },
  } = props
  const posts = allContentfulPost.posts.map(({ post }) => postNormalizer(post))
  const page = pageNormalizer(contentfulPage)

  return (
    <Layout pageTitle={page.title}>
      <Dex posts={posts} page={page} className={page.theme} />
    </Layout>
  )
}

export default BlogdexPage

// BlogdexPage.propTypes = {
//   data: {
//     contentfulPage: contentfulPageShape,
//     allContentfulPost: PropTypes.arrayOf(contentfulPostShape)
//   }
// }

export const query = graphql`
  query BlogdexPageQuery {
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
