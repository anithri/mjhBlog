import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class RootIndex extends React.Component {
  render() {
    console.log('RootIndex', this.props.data)
    const {
      title, slug,
      body: {
        childMarkdownRemark: {html: body}
      }
    } = this.props.data.contentfulSiteData.homePage

    return ([
        <Helmet key="articleHelmet" title={title} />,
        <h2 key="articleTitle">{title}</h2>,
        <main key="articleContent" dangerouslySetInnerHTML={{ __html: body }} />,
      ]
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query indexPage {
    contentfulSiteData(current: {eq: "current"}) {
      homePage {
        title
        slug
        body {
          childMarkdownRemark {
            html
          }
        }    
      }
    }
  }
`