import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import cx from 'classnames'
import { Footer, Header, Navigation, HtmlHead, FeaturedImage, Blockquote, ContentfulBody } from 'components'
import * as styles from './styles.module.css'
import '../../styles/site.css'
import { BirdInFlight } from './BirdInFlight'

export const Layout = ({ className, children, noBackground, pageTitle, pageQuote, featuredImage, contentfulBody }) => {
  // console.log('Layoute pageQuote', pageQuote)
  return (
    <React.Fragment>
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        renderView={props => <div {...props} className={cx(className, styles.scrollFix)} />}
        className={styles.container}>
        <HtmlHead pageTitle={pageTitle} />
        <section
          className={cx(
            styles.page,
            !noBackground && styles.background
          )}>
          <Header className={styles.header} />
          <Navigation className={styles.navigation} />
          <BirdInFlight className={styles.birdInFlight} />
          <main className={styles.content}>
            {featuredImage && <FeaturedImage image={featuredImage}/> }
            {pageQuote && <Blockquote quote={pageQuote} />}
            {contentfulBody && <ContentfulBody body={contentfulBody.childMarkdownRemark.html} />}
            {children}
          </main>
          <Footer className={styles.footer} />
        </section>
      </Scrollbars>
    </React.Fragment>
  )
}

export default Layout
