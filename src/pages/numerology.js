import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from 'components'
import { GatsbyImage } from 'gatsby-plugin-image'

const NumerologyPage = ({ data }) => {
  // console.log(data)
  const { body, images, title } = data.page
  const html = body.childMarkdownRemark.html
  return (
    <Layout title='Home'>
      <h2 className="pageTitle">{title}</h2>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default NumerologyPage

export const query = graphql`
  query GetNumerologyPage {
    page: contentfulPage(slug: { eq: "numerology" }) {
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
