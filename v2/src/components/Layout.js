// import React, { Fragment } from 'react'
import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, useStaticQuery } from 'gatsby'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'

import * as _styles from '../styles/site.css'

const Layout = ({ children, pageTitle }) => {
  const { site, contentfulSiteData } = useStaticQuery(graphql`
    query SiteLayoutQuery {
      site {
        siteMetadata {
          homeUrl
          host
        }
      }
      contentfulSiteData(current: { eq: "CURRENT" }) {
        title
        keywords
        description
        pages {
          linkName
          slug
        }
      }
    }
  `)

  const { homeUrl, host } = site.siteMetadata
  const { title, keywords, description, pages } = contentfulSiteData
  return (
    <section className="pageGrid">
      <Helmet
        defaultTitle={title}
        title={pageTitle}
        titleTemplate={`${title} - %s`}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords.join(',') },
        ]}
      />
      <Header className="pageHeader" {...{ title, homeUrl, host }} />
      <Nav className="pageNav" {...{ pages }} />
      <aside className="birdInFlight">
        <p>Bird In Flight</p>
      </aside>
      <main className="pageContent">{children}</main>
      <Footer className="pageFooter" />
    </section>
  )
}

export default Layout
//         return (
//           <Fragment>
//             <Helmet
//               defaultTitle={siteTitle}
//               titleTemplate={`%s | ${siteTitle}`}
//             >
//               {title}
//               <link href="https://ucarecdn.com" rel="preconnect" crossorigin />
//               <link rel="dns-prefetch" href="https://ucarecdn.com" />
//               {/* Add font link tags here */}
//             </Helmet>
//
//             <Meta
//               googleTrackingId={googleTrackingId}
//               absoluteImageUrl={
//                 socialMediaCard &&
//                 socialMediaCard.image &&
//                 socialMediaCard.image
//               }
//               {...meta}
//               {...data.settingsYaml}
//             />
//
//             <GithubCorner url="https://github.com/thriveweb/yellowcake" />
//
//             <Nav subNav={subNav} />
//
//             <Fragment>{children}</Fragment>
//
//             <Footer />
//           </Fragment>
//         )
//       }}
//     />
//   )
// }
