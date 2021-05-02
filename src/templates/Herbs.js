import React from 'react'
import { graphql } from 'gatsby'
import { Layout, PagedList } from 'components'
import { ArtworkSummary } from 'components'

// import {GatsbyImage} from 'gatsby-plugin-image'

const HerbPage = ({ data }) => {
  const { title, body } = data.page
  const html = body.childMarkdownRemark.html
  const artwork = data.artwork.edges.map(({node}) => node)

  return (
    <Layout title={title}>
      <section dangerouslySetInnerHTML={{ __html: html }} />
      <PagedList list={artwork} mkElement={(artwork, idx) => <ArtworkSummary artwork={artwork} idx={idx} /> } />
    </Layout>
  )
}

export default HerbPage

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
            gatsbyImageData(layout: FIXED, width: 90)
          }
        }
      }
    }
  }
`
