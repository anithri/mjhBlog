import React, { useState } from 'react'
import SummaryList from './SummaryList'

const SelectButton = ({ name, className, doClick }) => {
  return (
    <li className={className} onClick={doClick}>
      <div>
        <header>{name}</header>
      </div>
    </li>
  )
}

const PostHome = ({ children, className, page, posts }) => {
  const [selected, filterBy] = useState({ year: 'All', month: 'All' })
  const updateYear = year => {
    if (year == 'All' && selected.year !== 'All') {
      filterBy({ year: 'All', month: 'All' })
    } else if (selected.year !== year) {
      filterBy({ ...selected, year })
    }
  }
  const updateMonth = (month) => {
    console.log('updateMonth', month, selected)
    filterBy({ ...selected, month })
    console.log('  result: ', selected)
  }
  const allYears = ['All', '2020', '2019', '2018']
  const allMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  // const postsByYear = {}
  // const postsByYearMonth = {}
  //
  // posts.sort((a,b) => b.publishOn - a.publishOn).forEach(post => {
  //   const year = post.publishOn.slice(0,4)
  //   const month = post.publishOn.slice(5,7)
  //   postsByYear[year] = postsByYear[year] || []
  //   postsByYear[year].push(post)
  //
  //   postsByYearMonth[year] = postsByYearMonth[year] || {}
  //   postsByYearMonth[year][month] = postsByYearMonth[year][month] || []
  //   postsByYearMonth[year].all = postsByYearMonth[year].all || []
  //   postsByYearMonth[year].all.push(post)
  //   postsByYearMonth[year][month].push(post)
  // })
  //
  // console.log('postsByYear', Object.values(postsByYear))
  //
  // const listsByYear = Object.keys(postsByYear)
  //   .map(k => {console.log('listByYear', k); return k})
  //   .sort((a, b) => b - a)
  //   .map((year, idx) =>
  //     <SummaryList doClick={(e) => changeSection(idx + 1)} isOpen={idx === openSection}
  // posts={postsByYear[year]} title={year} key={`year-${year}`} />, )

  const years = allYears.map(year => {
    const isSelected = year === selected.year
    const className = ['yearBtn', isSelected && 'selected']
      .filter(c => c)
      .join(' ')
    return (
      <SelectButton
        name={year}
        className={className}
        key={`select-${year}`}
        doClick={() => isSelected || updateYear(year)}
      />
    )
  })

  const months = allMonths.map(month => {
    const yearOnly = selected.year === 'All' || selected.month == 'All'
    const isSelected = selected.month === month
    const isEmpty = false
    const className = [
      'monthBtn',
      isSelected && 'selected',
      isEmpty && 'empty',
      month.toLowerCase()
    ]
      .filter(c => c)
      .join(' ')
    return (
      <SelectButton
        name={month}
        className={className}
        key={`select-${month}`}
        doClick={() => isSelected || updateMonth(month)}
      />
    )
  })

  return (
    <section className={`${className} postHome`}>
      {/*{listsByYear}*/}
      <ul className="yearSelector">
        {years}
        {months}
      </ul>
      {children}
      {/*<SummaryList doClick={() => changeSection(0)} isOpen={openSection < 0} posts={recentPosts} title="Recent" key={'recent-posts'}/>)*/}
    </section>
  )
}

const PostNav = ({}) => {}

PostHome.defaultProps = {
  className: ''
}

export default PostHome
