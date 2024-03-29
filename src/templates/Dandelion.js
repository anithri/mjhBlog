import { ArtworkPage } from 'components'
import { graphql } from 'gatsby'
export { query } from '../pages/herbs'
// import {GatsbyImage} from 'gatsby-plugin-image'
const PAGE_WIDTH = 768
export default ArtworkPage
export const pageQuery = graphql`
  query GetDandelionArtPage($id: String) {
    page: contentfulPage(slug: { eq: "project-dandelion" }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    dandelion: contentfulArtwork(id: { eq: $id }) {
      collection
      id
      publishOn
      slug
      title
      summary
      art {
        gatsbyImageData(layout: CONSTRAINED, width: 768)
      }
      fullscreen: art {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`
