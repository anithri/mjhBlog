import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import Slug from '../utils/Slug'
import { imageShape, imageContainer } from './image'

export const postLinkShape = PropTypes.shape({
  dateStamp: PropTypes.instanceOf(moment),
  displayTitle: PropTypes.string.isRequired,
  publishDate: PropTypes.string,
  skipDate: PropTypes.bool,
  slug: PropTypes.string.isRequired,
  slugPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
})

export const postShape = PropTypes.shape({
  body: PropTypes.string,
  dateStamp: PropTypes.instanceOf(moment),
  publishDate: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  slugPath: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(imageShape),
  next: postLinkShape,
  prev: postLinkShape,
})

export const contentfulPostShape = PropTypes.shape({
  body: {
    childMarkdownRemark: {
      html: PropTypes.string.isRequired,
      excerpt: PropTypes.string,
    },
  },
  publishOn: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  summary: PropTypes.string,
  theme: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(imageShape),
})

export const postLinkContainer = (post, overrideTitle = false) => {
  const dateStamp = moment(post.publishOn)
  const publishDate = dateStamp.format('LL')
  const displayTitle =
    overrideTitle || `${dateStamp.format('LL')} - ${post.title}`
  const title = overrideTitle || post.title

  return {
    slugPath: Slug.post(post.slug, dateStamp),
    skipDate: !!title,
    displayTitle,
    dateStamp,
    publishDate,
    title,
  }
}

const contentfulPost = post => {
  console.log('contentfulPostContainer', post)
  const dateStamp = moment(post.publishOn)
  const images = post.images ? post.images.map(i => imageContainer(i)) : []
  return {
    ...post,
    body: post.body.childMarkdownRemark.html,
    dateStamp,
    images,
    publishDate: dateStamp.format('MMM D, YYYY'),
    slugPath: Slug.post(post.slug, dateStamp),
    summary: post.body.childMarkdownRemark.excerpt,
    displayTitle: `${dateStamp.format('LL')} - ${post.title}`
  }
}

export const commonPostFragment = graphql`
  fragment commonPostFragment on ContentfulPost {
    body {
      childMarkdownRemark {
        html
        excerpt
      }
    }
    images {
      title
      sizes(maxWidth: 1280) {
        ...GatsbyContentfulSizes_noBase64
      }
    }
    publishOn
    slug
    summary
    theme
    title
  }

  fragment commonPostLinkFragment on ContentfulPost {
    contentful_id
    slug
    title
    publishOn
  }
`

export default contentfulPost
