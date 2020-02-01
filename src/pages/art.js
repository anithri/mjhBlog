import React from 'react'
import { pageNormalizer, commonPageFragment } from '../queries/page'
import { artNormalizer, commonArtFragment } from '../queries/art'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { ArtHome } from '../components/artworks'

const ArtHomePage = props => {
  console.log('Art Home Page', props)
  const {
    data: { allContentfulArt, contentfulPage },
  } = props

  const works = allContentfulArt.artworks.map(({ workOfArt }) => {
    return artNormalizer(workOfArt)
  })
  const page = pageNormalizer(contentfulPage)
  return (
    <Layout pageTitle={page.title}>
      <ArtHome artworks={works} page={page}>
        <h1>Art Here!</h1>
      </ArtHome>
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
  query ArtHomePageQuery {
    contentfulPage(slug: { eq: "art" }) {
      ...commonPageFragment
    }
    allContentfulArt (
      sort: { fields: [publishOn], order: DESC }
      filter: { publishOn: { ne: null } }
    ) {
      artworks: edges {
        workOfArt: node {
          ...commonArtFragment
        }
      }
    }
  }
`
