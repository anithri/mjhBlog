import React, {useState} from 'react'
import Summary from './Summary'
import SummaryHeader from './SummaryHeader'

export const SummaryList = ({ posts, className, title, isOpen, doClick }) => {
  console.log('SummaryList', posts)
  const [selectedSection, doSelectSection] = useState('all')

  const postsByMonth = posts.reduce((hsh, post) => {
    const month = post.publishDate.slice(5, 7)
    hsh[month] = hsh[month] || []
    hsh[month].push(post)
    return hsh
  })

  const selections = Object.keys(postsByMonth)
    .sort((a, b) => b - a)
    .map(month => {
      console.log(month)
      return (
        <li key={`selection-${postsByMonth[month][0].publishDate}`} onClick={() => doSelectSection(month)}>{month}</li>
      )
    })
  postsByMonth.all = posts

  const postSummaries =postsByMonth[selectedSection].map(post => (
    <li key={`postSummary-${post.slug}`} className={isOpen ? '' : 'dn'}>
      <Summary post={post} title={title} />
    </li>
  ))

  return (
    <ul className={className}>
      {title && <article className={`${className} postSummary`}>
        <header className="postSummaryHeader" onClick={doClick}>
          <h3>{title}</h3>
        </header>

      </article>}
      <ul>
        <li onClick={() => doSelectSection('all')}>All</li>
        {selections}
      </ul>
      {postSummaries}
    </ul>
  )
}

SummaryList.defaultProps = {
  className: 'postSummaryList',
}
export default SummaryList
