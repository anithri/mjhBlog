import React, { useState } from 'react'
import cx from 'classnames'
import {GatsbyImage} from 'gatsby-plugin-image'

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
        <GatsbyImage alt={art.title} onClick={mkWide} image={art.image}/>
      </div>
      <p>{summary}</p>
      {children}
    </article>
  )
}

export default Artwork
