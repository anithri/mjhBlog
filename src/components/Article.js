import React from 'react'
import Img from 'gatsby-image'
import Exhibit from './Exhibit'

const Article = ({ children, className = '', subject }) => {
  const { body, dateStamp, publishDate, title, images } = subject
  let timeHeader, imageTags

  if (images && images.length > 0) {
    imageTags = (<Img fluid={images[0].fluid} alt={images[0].title} />)
  }

  if (dateStamp) {
    timeHeader = (<time dateTime={dateStamp.format()}>{publishDate}</time>)
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
