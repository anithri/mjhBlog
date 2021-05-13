import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from 'components'
import {GatsbyImage} from 'gatsby-plugin-image'
import { Blockquote } from '../components/Blockquote'
const quote = `When the bird and the book disagree,<br />
 always believe the bird.`

const caption = "John James Audubon"

const IndexPage = ({ data }) => {
  console.log(data)
  const { title, slug, body, images } = data.page
  const html = body.childMarkdownRemark.html
  const imageTitle = images[0].title
  const image = images[0].gatsbyImageData
  console.log('IndexPage.query', title, slug, html, images)
  return (
    <Layout title='Home'>
      <GatsbyImage image={image} alt={imageTitle} />
      <Blockquote quote={quote} caption={caption} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query GetIndexPage {
    page: contentfulPage(slug: {eq: "home"}) {
      id
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      images {
        gatsbyImageData(layout: CONSTRAINED, width: 768)
      }
    }
  }
`
