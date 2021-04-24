import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from 'components'
import {GatsbyImage} from 'gatsby-plugin-image'

export const BlogPage = ({ data }) => {
  const { title, body } = data.page
  const html = body.childMarkdownRemark.html

  return (
    <Layout title={title}>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query GetBlogPage {
    page: contentfulPage(slug: {eq: "blog"}) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
