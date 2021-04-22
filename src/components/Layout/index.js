import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import cx from 'classnames'
import FadeIn from 'react-fade-in'
import { Footer, Header, Navigation, SEO } from 'components'
import * as styles from './styles.module.css'
import '../../styles/site.css'

export const Layout = ({ className, children, noBackground, pageTitle }) => {
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      renderView={props => <div {...props} className={cx(className,styles.scrollFix)} />}
      className={styles.container}>
      <div
        className={cx(
          styles.pageContainer,
          !noBackground && styles.background
        )}>
        <Header className={styles.header} />
        <SEO pageTitle={pageTitle} />
        <Navigation className={styles.navigation} />
        <FadeIn>
          <main className={styles.content}>
            {children}
          </main>
        </FadeIn>
        <Footer className={styles.footer}/>
      </div>
    </Scrollbars>
  )
}

export default Layout
