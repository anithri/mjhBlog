import React from 'react'

import { pageNormalizer, commonPageFragment } from '../queries/page'
import { artworkNormalizer, commonArtworkFragment } from '../queries/artwork'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { ArtHome } from '../components/artworks'

const ArtHomePage = props => {
  const {
    data: { allContentfulArtwork, contentfulPage },
  } = props

  const artworks = allContentfulArtwork.artworks.map(({ workOfArt }) => {
    return artworkNormalizer(workOfArt)
  })
  const page = pageNormalizer(contentfulPage)
  return (
    <Layout pageTitle={page.title}>
      <h1>{page.title}</h1>
      <ArtHome artworks={artworks} page={page} />
    </Layout>
  )
}

export default ArtHomePage

// ArtHomePage.propTypes = {
//   data: {
//     contentfulPage: contentfulPageShape,
//     allContentfulPost: PropTypes.arrayOf(contentfulPostShape)
//   }
// }

export const query = graphql`
  query ArtworkHomePageQuery {
    contentfulPage(slug: { eq: "art" }) {
      ...commonPageFragment
    }
    allContentfulArtwork (
      sort: { fields: [publishOn], order: DESC }
      filter: { publishOn: { ne: null } }
    ) {
      artworks: edges {
        workOfArt: node {
          ...commonArtworkFragment
        }
      }
    }
  }
`
