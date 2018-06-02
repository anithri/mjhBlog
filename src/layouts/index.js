import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import '../styles/site.css'

const Layout = ({children, data}) => {
  const { site, contentfulSiteData } = data
  const { homeUrl, host } = site.siteMetadata
  const { siteTitle, keywords, description, pages } = contentfulSiteData
  return (
    <section className="pageGrid">
      <Helmet
        defaultTitle={siteTitle}
        titleTemplate={`${siteTitle} - %s`}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords.join(',') },
        ]}
      />
      <Header className="pageHeader" {...{ siteTitle, homeUrl, host }} />
      <Nav className="pageNav" {...{ pages }} />
      <main className="pageContent">{children()}</main>
      <Footer className="pageFooter" />
    </section>
  )
}

// Layout.propTypes = {
//   data: {
//     site: {
//       siteMetadata: {
//         homeUrl: PropTypes.string,
//         host: PropTypes.string,
//       },
//     },
//     contentfulSiteData: {
//       siteTitle: PropTypes.string.isRequired,
//       keywords: PropTypes.arrayOf(PropTypes.string.isRequired),
//       description: PropTypes.string.isRequired,
//       pages: PropTypes.arrayOf({
//         linkName: PropTypes.string.isRequired,
//         slug: PropTypes.string.isRequired,
//       }),
//     },
//   },
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]),
// }

export default Layout

export const SiteLayoutQuery = graphql`
  query SiteLayoutQuery {
    site {
      siteMetadata {
        homeUrl
        host
      }
    }
    contentfulSiteData(current: { eq: "CURRENT" }) {
      siteTitle
      keywords
      description
      pages {
        linkName
        slug
      }
    }
  }
`
