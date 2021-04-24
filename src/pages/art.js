import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from 'components'
import { GatsbyImage } from 'gatsby-plugin-image'

export const ArtPage = ({ data }) => {
  console.log(data)
  const { title, slug, body } = data.page
  const html = body.childMarkdownRemark.html
  return (
    <Layout title='Art'>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default ArtPage

export const query = graphql`
  query GetArtPage{
    page: contentfulPage(slug: {eq: "art"}) {
      id
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
