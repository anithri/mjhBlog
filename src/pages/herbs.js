import React from 'react'
import { graphql } from 'gatsby'
import {ArtworkPage } from 'components'

export default ArtworkPage

export const query = graphql`
  query GetHerbPage {
    page: contentfulPage(slug: {eq: "herbs"}) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    artwork: allContentfulArtwork(
      sort: {fields: publishOn, order: DESC}
      filter: {collection: {eq: "Herbs"}}
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
            gatsbyImageData(layout: CONSTRAINED, width: 120)
          }
        }
      }
    }
  }
`
