import React, { useReducer } from 'react'
import SummaryList from './SummaryList'
import moment from 'moment'
import { categorizePosts } from './utils'
import { reducer } from './filter'
import {YearColumn} from './YearColumn'
import {MonthsGrid} from './MonthsGrid'


const PostHome = ({ children, className, page, posts }) => {
  const [{ years, months, categorized, selected, isSelected}, dispatch] = useReducer(
    reducer,
    categorizePosts(posts)
  )

  return (
    <section className={`${className} postHome`}>
      {/*{listsByYear}*/}
      <ul className="yearSelector">
        <YearColumn className="yearBtn" years={years} selected={selected} dispatch={dispatch} />
        <MonthsGrid className="monthBtn" months={months} selected={selected} dispatch={dispatch} />
      </ul>
      {children}
      <SummaryList
        posts={selected.posts}
        title={selected.category}
      />
    </section>
  )
}

const PostNav = ({}) => {}

PostHome.defaultProps = {
  className: ''
}

export default PostHome
