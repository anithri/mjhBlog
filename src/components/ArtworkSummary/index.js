import React from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'
import cx from 'classnames'
import * as styles from './styles.module.css'

export const ArtworkSummary = ({artwork, className}) => {
  console.log('ArtworkSummary', artwork)
  return (
    <article className={cx(className, styles.summary)}>
      <h3>{artwork.title}</h3>
      <GatsbyImage alt={artwork.title} image={artwork.art.gatsbyImageData} />
    </article>
  )
}
