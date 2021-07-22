import React, { useReducer } from 'react'
import SummaryList from './SummaryList'
import { PostButton } from './PostButton'
import { filterInit, filterReducer } from './filter'

const Dex = ({ children, className, page, posts = [] }) => {
  const [filter, setFilter] = useReducer(filterReducer, { posts }, filterInit)
  const { month, year, currentPosts, title, monthVisibility } = filter

  const monthButtons = filter.months.map(filterMonth =>
    <PostButton
      name={filterMonth}
      visibility={monthVisibility(filterMonth)}
      className={`monthBtn ${filterMonth.toLowerCase()}`}
      doClick={() => setFilter({ type: 'setFilter', month: filterMonth })}
      key={`postButton-${filterMonth}-btn`}
    />,
  )

  const yearButtons = filter.years.map(filterYear => {
    console.log('yearBtn', filterYear, year)
      return <PostButton
        name={filterYear}
        visibility={year === filterYear ? 'selected' : 'visible'}
        className={`yearBtn y${filterYear}`}
        doClick={() => setFilter({type: 'setFilter', year: filterYear,})}
        key={`postButton-${filterYear}`}
      />
    },
  )

  return (
    <section className={`${className} postHome`}>
      <ul className="yearSelector">
        {yearButtons}
        {monthButtons}
      </ul>
      {children}
      <SummaryList posts={currentPosts} title={title} />
    </section>
  )
}

export default Dex
