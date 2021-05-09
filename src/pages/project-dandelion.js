import React from 'react'
import { graphql } from 'gatsby'
import { ArtworkPage } from 'components'

export default ArtworkPage

export const query = graphql`
  query GetDandelionPage {
    page: contentfulPage(slug: {eq: "project-dandelion"}) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    artwork: allContentfulArtwork(
      sort: {fields: publishOn, order: DESC}
      filter: {collection: {eq: "Project Dandelion"}}
    ) {
      edges {
        node {
          collection
          id
          publishOn
          slug
          title
          summary
          art {
            gatsbyImageData(layout: CONSTRAINED, width: 120, height: 120)
          }
        }
      }
    }
  }
`
