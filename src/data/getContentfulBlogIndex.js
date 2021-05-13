import { graphql } from 'gatsby'

export const getContentfulBlogIndexQuery = graphql`
  query GetContentfulBlogIndex($skip: Int!, $limit: Int!) {
    page: contentfulPage(slug: {eq: "blog"}) {
      id
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      images {
        gatsbyImageData
      }
    }
    posts: allContentfulPost(
      sort: { fields: [publishOn], order: DESC },
      skip: $skip, limit: $limit
    ) {
      edges {
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
