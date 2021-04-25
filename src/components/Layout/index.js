import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import cx from 'classnames'
import FadeIn from 'react-fade-in'
import { Footer, Header, Navigation, HtmlHead } from 'components'
import * as styles from './styles.module.css'
import '../../styles/site.css'
import { Helmet } from 'react-helmet'

export const Layout = ({ className, children, noBackground, pageTitle }) => {
  return (
    <React.Fragment>
      <Helmet>

      </Helmet>
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        renderView={props => <div {...props} className={cx(className, styles.scrollFix)} />}
        className={styles.container}>
        <div
          className={cx(
            styles.pageContainer,
            !noBackground && styles.background
          )}>
          <Header className={styles.header} />
          <HtmlHead pageTitle={pageTitle} />
          <Navigation className={styles.navigation} />
          <FadeIn>
            <main className={styles.content}>
              {children}
            </main>
          </FadeIn>
          <Footer className={styles.footer} />
        </div>
      </Scrollbars>
    </React.Fragment>
  )
}

export default Layout
