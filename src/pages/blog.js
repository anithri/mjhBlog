import React from 'react'
import Helmet from 'react-helmet'
import PostSummary from '../components/PostSummary'
import PostSummaryList from '../components/PostSummaryList'

class BlogHomePage extends React.Component {
  render() {
    const { title, theme: { skin } } = this.props.data.contentfulPage
    const posts = this.props.data.allContentfulPost
      .edges
      .map((edge, idx) => {
        return (
          <PostSummary blogPost={edge.node} Wrapper="li"
                           key={`PostSummary${idx}`} />
        )
      })
    return (
      <section className={`postHomePage ${skin}`}>
        <Helmet title={title} />,
        <header>
          <h2>{title}</h2>
        </header>
        <PostSummaryList posts={posts}/>
      </section>
    )
  }
}

export default BlogHomePage

export const blogHomePageQuery = graphql`
  query blogHomePageQuery {
    contentfulPage(slug: {eq: "blog"}) {
      title
      theme {
        skin
      }
    }

    allContentfulPost(
        limit: 3
        sort: {fields: [publishOn], order: DESC}
        filter: {publishOn: {ne: null}}
      ) {
      edges {
        node {
          slug
          title
          dateTime: publishOn(formatString: "YYYY-MM-DD")
          publishDate: publishOn(formatString: "LL")
          summary
        }
      }
    }
  }
`