import React, { useState } from 'react'
import Article from '../../components/Article'
import Link from 'gatsby-link'
import Feedback from '../../components/Feedback'
import Layout from '../../components/Layout'
import {
  // eslint-disable-next-line
  artworkNormalizer,
  // eslint-disable-next-line
  artworkLinkNormalizer,
  // eslint-disable-next-line
  commonArtworkFragment,
} from '../../queries/artwork'
import { graphql } from 'gatsby'

const ArtworksNavDisplay = ({ next, prev }) => {
  const [toggledOn, setToggle] = useState(false)
  const toggle = () => setToggle(!toggledOn)
  return (
    <nav className="artworkNav">
      <ul>
        {(prev && (
          <li>
            <Link to={prev.slugPath} title={prev.title}>
              Previous
            </Link>
          </li>
        )) ||
          null}
        <li>
          <Link to="/writings">All Entries</Link>
        </li>
        <li onClick={toggle} toggledOn={toggledOn} className="feedback">
          Feedback
        </li>
        {(next && (
          <li>
            <Link to={next.slugPath} alt={next.title}>
              Next
            </Link>
          </li>
        )) ||
          null}
      </ul>
      <Feedback toggle={toggle} toggledOn={toggledOn} />
    </nav>
  )
}

const ArtworksNav = ArtworksNavDisplay

const Artwork = ({ data: { nextArtwork, prevArtwork, currentArtwork } }) => {
  const next = (nextArtwork && artworkLinkNormalizer(nextArtwork, 'Next')) || null
  const prev = (prevArtwork && artworkLinkNormalizer(prevArtwork, 'Prev')) || null
  const artwork = artworkNormalizer(currentArtwork)

  return (
    <Layout pageTitle={artwork.title}>
      <Article
        subject={artwork}
        next={next}
        prev={prev}
        className={`${artwork.theme} artworkArticle`}
      >
        <ArtworksNav next={next} prev={prev} />
      </Article>
    </Layout>
  )
}

export const query = graphql`
  query ArtworkQuery(
    $contentful_id: String!
    $next_artwork_id: String
    $prev_artwork_id: String
  ) {
    currentArtwork: contentfulArtwork(contentful_id: { eq: $contentful_id }) {
      ...commonArtworkFragment
    }
    nextArtwork: contentfulArtwork(contentful_id: { eq: $next_artwork_id }) {
      ...commonArtworkLinkFragment
    }
    prevArtwork: contentfulArtwork(contentful_id: { eq: $prev_artwork_id }) {
      ...commonArtworkLinkFragment
    }
  }
`

export default Artwork
