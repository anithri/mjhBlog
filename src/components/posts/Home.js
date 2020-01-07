import React, { useReducer } from 'react'
import SummaryList from './SummaryList'
import moment from 'moment'
import { PostButton } from './PostButton'
import { filterInit, filterReducer } from './filter'

const PostHome = ({ children, className, page, posts = [] }) => {
  const [filter, setFilter] = useReducer(filterReducer, { posts }, filterInit)
  const { month, year, currentPosts, title, checkVis } = filter

  console.log('Recent Counts', filter.recentCounts, filter.recentCount)

  const recentButtons = filter.recentCounts.map(count => {
    const visibility = !filter.recentCount ?
      'hidden' :
      (count === filter.recentCount)
        ? 'selected' :
        'visible'

    return (
      <PostButton
        name={count}
        visibility={ visibility}
        className={`monthBtn recent${count}`}
        doClick={() => setFilter({ type: 'showRecent', recentCount: count })}
        key={`postButton-recent-${count}`}
      />
    )
  })

  const monthButtons = filter.months.map(filterMonth => {
    const key = `${year} ${filterMonth}`

    return (
      <PostButton
        name={filterMonth}
        visibility={checkVis(filterMonth)}
        className={`monthBtn ${filterMonth.toLowerCase()}`}
        doClick={() => setFilter({ type: 'changeMonth', month: filterMonth })}
        key={`postButton-${key}`}
      />
    )
  })

  const yearButtons = filter.years.map(filterYear => {
    return (
      <PostButton
        name={filterYear}
        visiblity={checkVis(filterYear)}
        className={`monthBtn y${filterYear}`}
        doClick={() => setFilter({ type: 'changeYear', year: filterYear })}
        key={`postButton-${filterYear}`}
      />
    )
  })

  return (
    <section className={`${className} postHome`}>
      <ul className="yearSelector">
        <PostButton
          name="Recent"
          visibility={year ? 'visible' : 'selected'}
          className={`recent`}
          doClick={() => setFilter({ type: 'showRecent' })}
        />
        {recentButtons}
        {yearButtons}
        {monthButtons}
      </ul>
      {children}
      <SummaryList posts={currentPosts} title={title} />
    </section>
  )
}

PostHome.defaultProps = {
  className: ''
}

export default PostHome
