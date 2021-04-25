import React from 'react'
import { Layout } from '../components'
import {graphql} from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const BlogEntry = ({data}) => {
  const title = data.post.title
  const html = data.post.body.childMarkdownRemark.html
  const image = data.post.images[0]

  return (
    <Layout>
      <h1>{title}</h1>
      <GatsbyImage image={image.gatsbyImageData} alt={image.title} />
      <section dangerouslySetInnerHTML={{__html: html}} />
    </Layout>
  )
}
export default BlogEntry

export const pageQuery = graphql`
  query BlogPostQuery($id: String!, $prevId: String, $nextId: String) {
    post: contentfulPost(id: {eq: $id}) {
      slug
      title
      publishOn
      body {
        childMarkdownRemark {
          html
        }
      }
      images {
        gatsbyImageData(layout: FIXED, width: 800)
      }
      id
    }
    prev: contentfulPost(id: {eq: $prevId}) {
      title
      slug
      year: publishOn(formatString: "YYYY")
      month: publishOn(formatString: "MM")
      day: publishOn(formatString: "DD")
    }
    next: contentfulPost(id: {eq: $nextId}) {
      title
      slug
      year: publishOn(formatString: "YYYY")
      month: publishOn(formatString: "MM")
      day: publishOn(formatString: "DD")
    }
  }
`
