import React from 'react'
import PropTypes from 'prop-types'
import {postSlugFrom} from '../utils/postSlug'

export const postShape = PropTypes.shape({
  body: PropTypes.string,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  slugPath: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  summaryBody: PropTypes.string.isRequired,
  skin: PropTypes.string.isRequired,
})

export const contentfulPostShape = PropTypes.shape({
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  summary: PropTypes.string,
  body: {
    childMarkdownRemark: {
      html: PropTypes.string.isRequired,
      excerpt: PropTypes.string,
    }
  },
  theme: {
    skin: PropTypes.string.isRequired,
  }
})

const contentfulPost = (post) => {
  console.log(post)
  return {
    ...post,
    body: post.body.childMarkdownRemark.html,
    skin: (post.theme && post.theme.skin) || '',
    excerpt: post.body.childMarkdownRemark.excerpt,
    slugPath: postSlugFrom(post.slug,post.dateTime),
    summaryBody: post.summary || post.body.childMarkdownRemark.excerpt
  }
}

export const commonPostFragment = graphql`
  fragment commonPostFragment on ContentfulPost {
    slug
    title
    dateTime: publishOn(formatString: "YYYY-MM-DD")
    publishDate: publishOn(formatString: "LL")
    summary
    body {
      childMarkdownRemark {
        html
        excerpt
      }
    }
    theme {
      skin
    }
  }
`


export default contentfulPost