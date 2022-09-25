import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './styles.module.css'
import cx from 'classnames'

const ImageBlock = ({ image, dir }) => {
  return (
    <>
      <hr className={styles.hr} />
      <div className={cx(styles.imageBlock, styles[dir])}>
        {image.body ? (
          <section
            className={styles.imageDesc}
            dangerouslySetInnerHTML={{ __html: image.body.childMarkdownRemark.html }}
          />
        ) : (
          <section className={styles.imageDesc}>
            <p>{image.summary}</p>
          </section>
        )}
        <GatsbyImage
          className={styles.imageArt}
          image={image.art.gatsbyImageData}
          alt={image.title}
        />
      </div>
    </>
  )
}

export default ImageBlock
