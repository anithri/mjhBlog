import { graphql } from 'gatsby'
import { ArtworkIndexPage } from 'components'

export default ArtworkIndexPage

export const query = graphql`
  query GetDandelionPage {
    page: contentfulPage(slug: { eq: "project-dandelion" }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    artwork: allContentfulArtwork(
      sort: { fields: publishOn, order: DESC }
      filter: { collection: { eq: "Project Dandelion" } }
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
            gatsbyImageData(layout: FULL_WIDTH, width: 90)
          }
        }
      }
    }
  }
`
