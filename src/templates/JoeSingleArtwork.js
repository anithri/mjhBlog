import { JoeArtworkPage } from 'components'
import { graphql } from 'gatsby'
export { query } from '../pages/herbs'
// import {GatsbyImage} from 'gatsby-plugin-image'
const PAGE_WIDTH = 768
export default JoeArtworkPage
export const pageQuery = graphql`
  query GetJoeArtworkPage($id: String) {
    joeArtwork: contentfulArtwork(id: { eq: $id }) {
      collection
      id
      publishOn
      slug
      title
      summary
      body {
        childMarkdownRemark {
          html
        }
      }
      art {
        gatsbyImageData(layout: CONSTRAINED)
      }
      fullscreen: art {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`
