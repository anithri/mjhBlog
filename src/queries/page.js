import 'react'
import {graphql} from 'gatsby'
import {GatsbyContentfulFluid_noBase64} from 'gatsby-source-contentful/src/fragments'
import { imageNormalizer } from './image'

export const pageNormalizer = (page) => {
  const images = page.images ? page.images.map(i => imageNormalizer(i)) : []
  const body = page.body.childMarkdownRemark.html
  return {
    ...page,
    body,
    images
  }
}

export const commonPageFragment = graphql`
  fragment commonPageFragment on ContentfulPage {
    body {
      childMarkdownRemark {
        html
      }
    }
    images {
      title
      fluid(maxWidth: 1280) {
        ...GatsbyContentfulFluid_noBase64
      }
    }
    slug
    theme
    title
  }
`
