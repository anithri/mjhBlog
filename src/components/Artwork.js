import React, { useState } from 'react'
import Img from 'gatsby-image'
import Exhibit from './Exhibit'
import cx from 'classnames'

const Artwork = ({ children, className = '', subject, ...props }) => {
  const { summary, dateStamp, publishDate, title, art } = subject
  const [wide, setWide] = useState(false)
  const mkWide = () => {
    console.log('mkWide', !wide)
    setWide(!wide)
  }
  return (
    <article className={cx(className, 'artwork')}>
      <header>
        <h3 className={'artTitle'}>{title}</h3>
      </header>
      <div onClick={mkWide} className={cx(wide && 'fullWidth')} >
        <Img fluid={art.fluid} alt={art.title} onClick={mkWide} />
      </div>
      <p>{summary}</p>
      {children}
    </article>
  )
}

export default Artwork
