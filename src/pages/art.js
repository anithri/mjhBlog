import { graphql } from 'gatsby'
import { ArtworkPage } from 'components'

export default ArtworkPage

export const query = graphql`
  query GetArtPage {
    page: contentfulPage(slug: {eq: "art"}) {
      title
      body {
        childMarkdownRemark {
          html
        }
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
