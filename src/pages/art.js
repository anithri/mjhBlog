import { graphql } from 'gatsby'
import { ArtworkIndexPage } from 'components'

export default ArtworkIndexPage

export const query = graphql`
  query GetArtPage {
    page: contentfulPage(slug: {eq: "art"}) {
      title
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
        gatsbyImageData(layout: CONSTRAINED, width: 768)
      }
    }
    artwork: allContentfulArtwork(
      sort: {fields: publishOn, order: DESC}
      filter: {collection: {eq: "Art"}}
    ) {
      all: edges {
        node {
          collection
          id
          publishOn
          slug
          title
          summary
          art {
            gatsbyImageData(layout: FIXED, width: 90)
          }
        }
      }
    }
  }
`
