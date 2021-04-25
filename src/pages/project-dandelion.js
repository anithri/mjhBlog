import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from 'components'
// import {GatsbyImage} from 'gatsby-plugin-image'

export const DandelionPage = ({ data }) => {
  const { title, body } = data.page
  const html = body.childMarkdownRemark.html

  return (
    <Layout title={title}>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default DandelionPage

export const query = graphql`
  query GetDandelionPage {
    page: contentfulPage(slug: {eq: "project-dandelion"}) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
