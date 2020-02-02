import { graphql } from 'gatsby'
import Slug from '../utils/Slug'
import { imageNormalizer } from './image'
// import { GatsbyContentfulFluid_noBase64 } from 'gatsby-source-contentful/src/fragments'
const moment = require('moment')

export const artworkLinkNormalizer = (artwork, overrideTitle = false) => {
  const dateStamp = moment(artwork.publishOn)
  const publishDate = dateStamp.format('LL')
  const displayTitle =
    overrideTitle || `${dateStamp.format('LL')} - ${artwork.title}`
  const title = overrideTitle || artwork.title

  return {
    slugPath: Slug.artwork(artwork.slug, dateStamp),
    skipDate: !!title,
    displayTitle,
    dateStamp,
    publishDate,
    title,
  }
}

export const artworkNormalizer = artwork => {
  const dateStamp = moment(artwork.publishOn)
  const images = artwork.images ? artwork.images.map(i => imageNormalizer(i)) : []
  return {
    ...artwork,
    dateStamp,
    images,
    publishDate: dateStamp.format('MMM D, YYYY'),
    slugPath: Slug.artwork(artwork.slug, dateStamp),
    summary: artwork.summary,
    displayTitle: `${dateStamp.format('LL')} - ${artwork.title}`,
    year: dateStamp.format('YYYY'),
    month: dateStamp.format('MMMM'),
    key: dateStamp.format('YYYY MMMM'),
  }
}

export const commonArtworkFragment = graphql`
  fragment commonArtworkFragment on ContentfulArtwork {
    art {
      title
      fluid(maxWidth: 1280) {
        ...GatsbyContentfulFluid_noBase64
      }
    }
    publishOn
    slug
    summary
    title
  }

  fragment commonArtworkLinkFragment on ContentfulArtwork {
    contentful_id
    slug
    title
    publishOn
  }
`
