import React from 'react'
import * as styles from './styles.module.css'
import cx from 'classnames'

export const BirdInFlight = ({className}) => (
  <aside className={cx(className, styles.birdInFlight)}>
    <p>Bird In Flight</p>
  </aside>
)
