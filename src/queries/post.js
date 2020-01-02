import React from 'react'
import {GatsbyContentfulFluid_noBase64} from 'gatsby-source-contentful/src/fragments'

export const postLinkNormalizer = (post, overrideTitle = false) => {
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

export const postNormalizer = post => {
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
      fluid(maxWidth: 1280) {
        ...GatsbyContentfulFluid_noBase64
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
