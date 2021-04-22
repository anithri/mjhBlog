import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import cx from 'classnames'
import FadeIn from 'react-fade-in'
import { Header } from 'components'
import * as styles from './styles.module.css'
import '../../styles/site.css'

export const Layout = ({ classes, children, noBackground }) => (
  <Scrollbars
    autoHide
    autoHideTimeout={1000}
    autoHideDuration={200}
    renderView={props => <div {...props} className={styles.scrollFix} />}
    className={styles.container}>
    <div
      className={cx(
        styles.pageContainer,
        !noBackground && styles.background
      )}>
      <Header title={'Woot'} />
      <FadeIn>
        <main className={styles.content}>{children}</main>
        <h2>Boogaloo</h2>
      </FadeIn>
    </div>
  </Scrollbars>
)

export default Layout
