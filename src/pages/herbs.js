import { graphql } from 'gatsby'
import { ArtworkIndexPage } from 'components'

export default ArtworkIndexPage

export const query = graphql`
  query GetHerbPage {
    page: contentfulPage(slug: { eq: "herbs" }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    artwork: allContentfulArtwork(
      sort: { fields: publishOn, order: DESC }
      filter: { collection: { eq: "Herbs" } }
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
            gatsbyImageData(layout: CONSTRAINED, width: 90)
          }
        }
      }
    }
  }
`
