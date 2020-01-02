import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

const NotFound = ({ children, data }) => {
  const {
    siteData: { title }
  } = data
  return (
    <Layout>
      <Helmet>
        <title>404 – Page Not Found</title>
      </Helmet>
      <section className="section thick h-100 centering-flex center">
        <div className="container skinny taCenter">
          <h1>404 - Page Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <p>
            Please enjoy the rest of <Link to="/">{title}</Link>
          </p>
        </div>
      </section>
    </Layout>
    //   )}
    // />
  )
}

export const query = graphql`
  query NotFoundPageQuery {
    siteData: contentfulSiteData(current: { eq: "CURRENT" }) {
      title
    }
  }
`
export default NotFound
