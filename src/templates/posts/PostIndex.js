import React from 'react'
import Helmet from 'react-helmet'
import SummaryList from '../../components/posts/SummaryList'

class PostIndex extends React.Component {
  
  render() {
    
    return (
      <div className="woot">Hiya</div>
    )
  }
}


export const PostIndexQuery = graphql`
  query PostIndexQuery {
    allContentfulPost(
      sort: { fields: [publishOn], order: DESC}
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
