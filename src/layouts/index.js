import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import '../styles/site.css'

const Layout = props => {
  const { children, data } = props
  console.log('props', props)
  const { homeUrl, host } = data.site.siteMetadata
  const { siteTitle, keywords, description, pages } = data.contentfulSiteData

  return (
    <section className="pageGrid">
      <Helmet
        key="pageHelmet"
        defaultTitle={siteTitle}
        titleTemplate={`${siteTitle} - %s`}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords.join(',') },
        ]}
      />
      <Header className="pageHeader" {...{ siteTitle, homeUrl, host }} />
      <Nav className="pageNav" pages={pages} />
      <main className="pageContent">{children()}</main>
      <Footer className="pageFooter" />
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        homeUrl
        host
      }
    }
    contentfulSiteData(current: { eq: "current" }) {
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
