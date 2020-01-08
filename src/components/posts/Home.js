import React, { useReducer } from 'react'
import SummaryList from './SummaryList'
import { PostButton } from './PostButton'
import { filterInit, filterReducer } from './filter'

const PostHome = ({ children, className, page, posts = [] }) => {
  const [filter, setFilter] = useReducer(filterReducer, { posts }, filterInit)
  const { month, year, currentPosts, title, monthVisibility } = filter

  const recentButtons = filter.recentCounts.map(count => {
    const visibility = filter.recentCount ? 'visible' : 'hidden'
    return (
      <PostButton
        name={count}
        visibility={visibility}
        className={`monthBtn recent${count}`}
        doClick={() => setFilter({ type: 'showRecent', recentCount: count })}
        key={`postButton-recent-${count}`}
      />
    )
  })

  const monthButtons = filter.months.map(filterMonth =>
    <PostButton
      name={filterMonth}
      visibility={monthVisibility(filterMonth)}
      className={`monthBtn ${filterMonth.toLowerCase()}`}
      doClick={() => setFilter({ type: 'changeMonth', month: filterMonth })}
      key={`postButton-${filterMonth}-btn`}
    />,
  )

  const yearButtons = filter.years.map(filterYear =>
    <PostButton
      name={filterYear}
      visiblity={'visible'}
      className={`monthBtn y${filterYear}`}
      doClick={() => console.log('setFilter', filterYear) || setFilter({
        type: 'changeYear',
        year: filterYear,
      })}
      key={`postButton-${filterYear}`}
    />,
  )


  return (
    <section className={`${className} postHome`}>
      <ul className="yearSelector">
        <PostButton
          name="Recent"
          visibility={'visible'}
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
  className: '',
}

export default PostHome
