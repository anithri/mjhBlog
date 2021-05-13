import { BlogPage } from 'components'
import { graphql } from 'gatsby'


export default BlogPage
export const query = graphql`
  query GetBlogIndex {
    page: contentfulPage(slug: {eq: "blog"}) {
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

