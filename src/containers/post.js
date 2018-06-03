import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import Slug from '../utils/Slug'

export const postShape = PropTypes.shape({
  body: PropTypes.string,
  dateStamp: PropTypes.instanceOf(moment),
  publishDate: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  slugPath: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
})

export const contentfulPostShape = PropTypes.shape({
  body: {
    childMarkdownRemark: {
      html: PropTypes.string.isRequired,
      excerpt: PropTypes.string,
    }
  },
  publishOn: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  summary: PropTypes.string,
  theme: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
})

const contentfulPost = (post) => {
  const dateStamp = moment(post.publishOn)
  return {
    ...post,
    body: post.body.childMarkdownRemark.html,
    dateStamp,
    publishDate: dateStamp.format('LL'),
    slugPath: Slug.post(post.slug,dateStamp),
    summary: post.body.childMarkdownRemark.excerpt,
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
    publishOn
    slug
    summary
    theme
    title
  }
`


export default contentfulPost