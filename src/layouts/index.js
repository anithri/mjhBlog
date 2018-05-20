import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import '../styles/site.css'

const Nav = ({ pages, className }) => {
  const links = pages.map(({ title, slug }) => {
    return (
      <li key={`pageNav-${slug}`}>{title}</li>
    )
  })
  return (
    <nav className={className}>
      <ul>
        {links}
      </ul>
    </nav>
  )
}

const Footer = ({className}) => (<footer className={className}>The Footer</footer>)

const Layout = ({ children, data }) => {
  console.log(data)
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
      <main className="pageContent">
        {children()}
      </main>
      <Footer className="pageFooter"/>
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
    contentfulSiteData(current: {eq: "current"}) {
      siteTitle
      keywords
      description
      pages {
        title
        slug
      }
    }
  }
`
