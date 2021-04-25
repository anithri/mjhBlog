import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from 'components'
import { GatsbyImage } from 'gatsby-plugin-image'

export const AboutPage = ({ data }) => {
  console.log(data)
  const { title, slug, body, images } = data.page
  const html = body.childMarkdownRemark.html
  const imageTitle = images[0].title
  const image = images[0].gatsbyImageData
  console.log('IndexPage.query', title, slug, html, images)
  return (
    <Layout title='Home'>
      <GatsbyImage image={image} alt={imageTitle} />
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query GetAboutPage{
    page: contentfulPage(slug: {eq: "about"}) {
      id
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      images {
        title
        gatsbyImageData(layout: FIXED, width: 800)
      }
    }
  }
`
