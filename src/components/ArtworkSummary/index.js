import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import cx from 'classnames'
import * as styles from './styles.module.css'
import { artworkPath } from 'utils'

export const ArtworkSummary = ({ artwork, className, idx }) => {
  const objectPosition = [`${Math.floor(Math.random() * 100)}%`, `${Math.floor(Math.random() * 100)}%`].join(' ')
  const { collection } = artwork
  const path = artworkPath(artwork)
  return (
    <Link to={path}>
      <article className={cx(className, styles.summary, idx % 2 ? styles.odd : styles.even)}>
        <header>
          <h3>{artwork.title}</h3>
        </header>
        <GatsbyImage alt={artwork.title} className={styles.gatsbyImageWrapper}
                     imgStyle={{ objectPosition }}
                     imgClassName={styles.img}
                     image={artwork.art.gatsbyImageData} />
      </article>
    </Link>
  )
}
