import React from 'react'
import Layout from '../../components/Layout'

// import Helmet from 'react-helmet'
// import SummaryList from '../../components/posts/SummaryList'

const PostIndex = props => {
  return (
    <Layout>
      <h4>Post Index</h4>
    </Layout>
  )
}

//
// export const PostIndexQuery = graphql`
//   query PostIndexQuery {
//     allContentfulPost(
//       sort: { fields: [publishOn], order: DESC}
//       filter: { publishOn: { ne: null } }
//     ) {
//       posts: edges {
//         post: node {
//           ...commonPostFragment
//         }
//       }
//     }
//   }
// `
