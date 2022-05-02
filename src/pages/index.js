import React from 'react'
import { graphql } from 'gatsby'
import {ArtWalkBanner, Layout } from 'components'

const IndexPage = ({ data }) => {
  const { title, body, images, pageQuote } = data.page
  return (
    <Layout title={title}
            banner={<ArtWalkBanner />}
            contentfulBody={body}
            featuredImage={images && images[0]}
            pageQuote={pageQuote} />
  )
}

export default IndexPage

export const query = graphql`
  query GetIndexPage {
    page: contentfulPage(slug: {eq: "home"}) {
      id
      title
      slug
      pageQuote {
        lines
        caption
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      images {
        title
        gatsbyImageData(layout: CONSTRAINED, width: 768)
      }
    }
  }
`
