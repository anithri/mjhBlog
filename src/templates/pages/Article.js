import React from 'react'
import Helmet from 'react-helmet'
import Article from '../../components/Article'
import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const PageArticle = ({ contentful_id }) => {
  const { page } = useStaticQuery(graphql`
    query PageArticleQuery($contentful_id: String!) {
      page: contentfulPage(contentful_id: { eq: $contentful_id }) {
        body {
          childMarkdownRemark {
            html
          }
        }
        images {
          title
          fluid(maxWidth: 1280) {
            ...GatsbyContentfulFluid_noBase64
          }
        }
        slug
        theme
        title
      }
    }
  `)

  return (<Article
      subject={page}
      className={`pageArticle ${page.theme} ${page.slug}Page`}
    >
      <Helmet title={page.title} />
    </Article>
  )

}

export default PageArticle

