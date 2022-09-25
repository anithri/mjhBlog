import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import cx from 'classnames'
import { Footer, HtmlHead, Blockquote, ContentfulBody } from 'components'
import * as styles from './styles.module.css'
import ImageBlock from './ImageBlock'

// import '../../styles/site.css'

export const JoeHorvathArtLayout = ({ className, children, noBackground, title, html, images }) => {
  // console.log('Layoute pageQuote', pageQuote)
  return (
    <React.Fragment>
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        renderView={(props) => <div {...props} className={cx(className, styles.scrollFix)} />}
        className={styles.container}
      >
        <main className={cx(styles.page, !noBackground && styles.background)}>
          <h1 className={styles.title}>{title}</h1>
          <section className={styles.body} dangerouslySetInnerHTML={{ __html: html }} />
          <ul className={styles.images}>
            {images.map((img, idx) => (
              <li key={img.id}>
                <ImageBlock image={img} dir={idx % 2 ? 'odd' : 'even'} />
              </li>
            ))}
          </ul>
          <Footer className={styles.footer} />
        </main>
      </Scrollbars>
    </React.Fragment>
  )
}

export default JoeHorvathArtLayout
