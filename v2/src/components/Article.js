import React from 'react'
import Exhibit from './Exhibit'
import {GatsbyImage} from 'gatsby-plugin-image'

const Article = ({ children, className = '', subject }) => {
  const { body, dateStamp, publishDate, title, images } = subject
  let timeHeader, imageTags

  if (images && images.length > 0) {
    imageTags = <GatsbyImage alt={images[0].title} image={images[0]} />
  }

  if (dateStamp) {
    timeHeader = <time dateTime={dateStamp.format()}>{publishDate}</time>
  }
  return (
    <article className={`${className} article`}>
      <header>
        <h2>{title}</h2>
        {timeHeader}
      </header>
      <Exhibit images={images} className={'articleExhibit'} />
      <section dangerouslySetInnerHTML={{ __html: body }} />
      <div>{/*<Img resolutions={node.featuredImage.resolutions}/>*/}</div>
      {children}
    </article>
  )
}

export default Article
