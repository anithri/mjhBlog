import { graphql } from 'gatsby'
import { BlogPage } from 'components'

export default BlogPage
export const query = graphql`
  query GetBlogIndex($postIds: [String!]) {
    page: contentfulPage(slug: { eq: "blog" }) {
      id
      title
      slug
      pageQuote {
        lines
        caption
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      images {
        title
        gatsbyImageData
      }
    }
    posts: allContentfulPost(
      sort: { fields: [publishOn], order: DESC }
      filter: { id: { in: $postIds } }
    ) {
      all: edges {
        node {
          id
          title
          summary
          slug
          year: publishOn(formatString: "YYYY")
          month: publishOn(formatString: "MM")
          day: publishOn(formatString: "DD")
        }
      }
    }
  }
`
