import React from 'react'
import { graphql } from 'gatsby'
import { Layout, PagedList } from 'components'
import { ArtworkSummary } from 'components'

export const ArtPage = ({ data }) => {
  const { title, body } = data.page
  const html = body.childMarkdownRemark.html
  const artwork = data.artwork.edges.map(({node}) => node)

  return (
    <Layout title={title}>
      <section dangerouslySetInnerHTML={{ __html: html }} />
      <PagedList list={artwork} mkElement={artwork => <ArtworkSummary artwork={artwork} /> } />
    </Layout>
  )
}

export default ArtPage

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
      edges {
        node {
          collection
          id
          publishOn
          slug
          title
          summary
          art {
            gatsbyImageData(layout: FIXED, width: 800)
          }
        }
      }
    }
  }
`
