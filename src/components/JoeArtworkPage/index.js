import React, { useState } from 'react'
import * as styles from './styles.module.css'
import linkifyHtml from 'linkifyjs/html'
import { Link } from 'gatsby'
import { FeaturedImage, Layout } from 'components'
import cx from 'classnames'

const MiniNav = ({ prev, next, all, className }) => {
  return (
    <nav className={cx(className, styles.miniNav)}>
      {prev && (
        <Link className={styles.prev} to={prev.path}>
          <span className={styles.arrow}>⮈</span> {prev.title}
        </Link>
      )}

      {next && (
        <Link className={styles.next} to={next.path}>
          {next.title} <span className={styles.arrow}>⮊</span>
        </Link>
      )}
    </nav>
  )
}

export const JoeArtworkPage = ({ data, location, pageContext, className, ...props }) => {
  const { title, summary, slug, publishOn, art, fullscreen } = data.joeArtwork
  const { next, prev } = pageContext
  const formattedSummary = linkifyHtml(summary || '')
  const [isMax, toggleMax] = useState(false)

  return (
    <Layout title={title} className={cx(className, styles.herbPage, isMax && styles.max)}>
      <h2>{title}</h2>
      <p className={styles.summary} dangerouslySetInnerHTML={{ __html: formattedSummary }} />
      <MiniNav next={next} prev={prev} />
      <div onClick={() => toggleMax(!isMax)}>
        <FeaturedImage image={fullscreen} alt={title} layout="constrained" width="768"/>
      </div>
      <MiniNav next={next} prev={prev} />
    </Layout>
  )
}

// {
//     "gatsbyImageData": {
//         "images": {
//             "sources": [
//                 {
//                     "srcSet": "//images.ctfassets.net/qnuedtoz77aj/7c4uHfezgBoWec1L1s7ne1/26c2e00a976e30bae508584aa841e3c4/Green_Fire.jpg?w=192&h=256&q=50&fm=webp 192w,\n//images.ctfassets.net/qnuedtoz77aj/7c4uHfezgBoWec1L1s7ne1/26c2e00a976e30bae508584aa841e3c4/Green_Fire.jpg?w=384&h=512&q=50&fm=webp 384w,\n//images.ctfassets.net/qnuedtoz77aj/7c4uHfezgBoWec1L1s7ne1/26c2e00a976e30bae508584aa841e3c4/Green_Fire.jpg?w=768&h=1024&q=50&fm=webp 768w,\n//images.ctfassets.net/qnuedtoz77aj/7c4uHfezgBoWec1L1s7ne1/26c2e00a976e30bae508584aa841e3c4/Green_Fire.jpg?w=1536&h=2048&q=50&fm=webp 1536w",
//                     "sizes": "(min-width: 768px) 768px, 100vw",
//                     "type": "image/webp"
//                 }
//             ],
//             "fallback": {
//                 "src": "//images.ctfassets.net/qnuedtoz77aj/7c4uHfezgBoWec1L1s7ne1/26c2e00a976e30bae508584aa841e3c4/Green_Fire.jpg?w=768&h=1024&fl=progressive&q=50&fm=jpg",
//                 "srcSet": "//images.ctfassets.net/qnuedtoz77aj/7c4uHfezgBoWec1L1s7ne1/26c2e00a976e30bae508584aa841e3c4/Green_Fire.jpg?w=192&h=256&fl=progressive&q=50&fm=jpg 192w,\n//images.ctfassets.net/qnuedtoz77aj/7c4uHfezgBoWec1L1s7ne1/26c2e00a976e30bae508584aa841e3c4/Green_Fire.jpg?w=384&h=512&fl=progressive&q=50&fm=jpg 384w,\n//images.ctfassets.net/qnuedtoz77aj/7c4uHfezgBoWec1L1s7ne1/26c2e00a976e30bae508584aa841e3c4/Green_Fire.jpg?w=768&h=1024&fl=progressive&q=50&fm=jpg 768w,\n//images.ctfassets.net/qnuedtoz77aj/7c4uHfezgBoWec1L1s7ne1/26c2e00a976e30bae508584aa841e3c4/Green_Fire.jpg?w=1536&h=2048&fl=progressive&q=50&fm=jpg 1536w",
//                 "sizes": "(min-width: 768px) 768px, 100vw"
//             }
//         },
//         "layout": "constrained",
//         "width": 768,
//         "height": 1024,
//         "placeholder": {
//             "fallback": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAbABQDASIAAhEBAxEB/8QAGgAAAQUBAAAAAAAAAAAAAAAAAAECAwUGBP/EACcQAAEDAwIFBQEAAAAAAAAAAAEAAgMEERIFYRMhMUFxBhQiMoHh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwEC/8QAGhEAAwEBAQEAAAAAAAAAAAAAAAECESExYf/aAAwDAQACEQMRAD8ApaKmmqYOJ7qYOuRYOPZSyUU4BIqpjbdWfpuIOZGWkNPEcLnyu/UGBmdnNLYz8m5X7f1O6icTQMqq1p+GGrZainnw48h5X5uKFJrckctcHR9MB23KEdZvBJ3Omg0F99LBysc3WP6m69Wls4DRi1zQeQtfysqHOaLBzgNiUriXfZxPkqVlYSJcN/RtU7KW+yEhAv0QobP/2Q=="
//         }
//     }
// }
