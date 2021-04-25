import React from 'react'
import { graphql } from 'gatsby'
import { Layout, PagedList } from 'components'
import { ArtworkSummary } from 'components'
import { useArrayPagination } from '../data'
import cx from 'classnames'

// import {GatsbyImage} from 'gatsby-plugin-image'

export const DandelionPage = ({ data }) => {
  console.log('DandelionPage', data)
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

export default DandelionPage

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
            gatsbyImageData(layout: FIXED, width: 800)
          }
        }
      }
    }
  }
`
