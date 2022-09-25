import React from 'react'
import { graphql } from 'gatsby'
import { JoeHorvathArtLayout } from 'components'

const JoeHorvathArtPage = ({ data }) => {
  const { title, body } = data.page
  const images = data.images.nodes
  const html = body.childMarkdownRemark.html

  return <JoeHorvathArtLayout title={title} images={images} html={html} />
}

export default JoeHorvathArtPage

export const query = graphql`
  query GetJoeHorvathArtPage {
    page: contentfulPage(slug: { eq: "joe-horvath-artwork" }) {
      id
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    images: allContentfulArtwork(
      sort: { fields: publishOn, order: DESC }
      filter: { collection: { eq: "Joe Horvath" } }
    ) {
      nodes {
        id
        title
        summary
        body {
          childMarkdownRemark {
            html
          }
        }
        art {
          gatsbyImageData(layout: FIXED, width: 480)
        }
      }
    }
  }
`
