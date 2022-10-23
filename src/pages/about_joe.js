import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from 'components'
import { GatsbyImage } from 'gatsby-plugin-image'

const AboutJoePage = ({ data }) => {
  // console.log(data)
  const { title, body, images } = data.page
  const html = body.childMarkdownRemark.html
  const imageTitle = images[0].title
  const image = images[0].gatsbyImageData
  // console.log('IndexPage.query', title, slug, html, images)
  return (
    <Layout title={title}>
      <h2 className="pageTitle">{title}</h2>
      <GatsbyImage image={image} alt={imageTitle} className="floatLeft" />
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default AboutJoePage

export const query = graphql`
  query GetAboutJoePage {
    page: contentfulPage(slug: { eq: "about-joe" }) {
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
        gatsbyImageData(layout: FIXED, width: 150)
      }
    }
  }
`
