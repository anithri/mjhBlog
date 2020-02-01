import { graphql } from 'gatsby'
import Slug from '../utils/Slug'
import { imageNormalizer } from './image'
// import { GatsbyContentfulFluid_noBase64 } from 'gatsby-source-contentful/src/fragments'
const moment = require('moment')

export const artLinkNormalizer = (art, overrideTitle = false) => {
  const dateStamp = moment(art.publishOn)
  const publishDate = dateStamp.format('LL')
  const displayTitle =
    overrideTitle || `${dateStamp.format('LL')} - ${art.title}`
  const title = overrideTitle || art.title

  return {
    slugPath: Slug.art(art.slug, dateStamp),
    skipDate: !!title,
    displayTitle,
    dateStamp,
    publishDate,
    title,
  }
}

export const artNormalizer = art => {
  const dateStamp = moment(art.publishOn)
  const images = art.images ? art.images.map(i => imageNormalizer(i)) : []
  return {
    ...art,
    dateStamp,
    images,
    publishDate: dateStamp.format('MMM D, YYYY'),
    slugPath: Slug.art(art.slug, dateStamp),
    summary: art.summary,
    displayTitle: `${dateStamp.format('LL')} - ${art.title}`,
    year: dateStamp.format('YYYY'),
    month: dateStamp.format('MMMM'),
    key: dateStamp.format('YYYY MMMM'),
  }
}

export const commonArtFragment = graphql`
  fragment commonArtFragment on ContentfulArt {
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

  fragment commonArtLinkFragment on ContentfulArt {
    contentful_id
    slug
    title
    publishOn
  }
`
