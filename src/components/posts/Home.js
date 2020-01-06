import React, { useReducer, useState } from 'react'
import SummaryList from './SummaryList'
import moment from 'moment'

export const SelectButton = ({ name, className, doClick }) => {
  return (
    <li className={className} onClick={doClick}>
      <div>{name}</div>
    </li>
  )
}

const monthClassName = (month, selected, isEmpty) =>
  [month.toLowerCase(), 'monthBtn', selected, isEmpty]
    .filter(s => s)
    .join(' ')

const yearClassName = (year, selected, isEmpty) =>
  [
    'yearBtn',
    selected,
    isEmpty,
  ]
    .filter(s => s)
    .join(' ')

const PostHome = ({ children, className, page, posts = [] }) => {
  const [state, setState] = useState({ mode: 'Recent', currentPosts: posts.slice(0,5), recentCount: 5 })
  const { mode, month, year, currentPosts, title,recentCount } = state

  const isEmpty = (y, m = 'All') =>
    m === 'All' ?
      posts.some(p => p.year === y) :
      posts.some(p => p.year === y && p.month === m)

  const isSelected = (checkMode, checkYear = posts[0].year, checkMonth = posts[0].month) => {
    console.log('isSelected',checkMode, checkYear, checkMonth)
    switch (checkMode) {
    case 'Recent':
      return checkMode === mode
    case 'Year':
      return checkYear === year
    case 'Month':
      return checkYear === year && checkMonth === month
    default:
      throw new Error()
    }
  }

  const setFilter = (fresh) => {
    const newState = { ...state, ...fresh }
    switch (newState.mode) {
    case 'Recent':
      newState.currentPosts = posts.slice(0,newState.recentCount)
      newState.title = 'Recent'
      break
    case 'Month':
      newState.currentPosts = posts.filter(post => post.year === newState.year)
      newState.title = `${newState.year} - ${newState.month}`
      break
    case 'Year':
      newState.currentPosts = posts.filter(post => post.year === newState.year && post.month === newState.month)
      newState.title = newState.year
      break
    default:
      throw new Error()
    }

    setState(newState)
  }

  return (
    <section className={`${className} postHome`}>
      <ul className="yearSelector">
        <SelectButton
          name="Recent"
          className={yearClassName(
            'Recent',
            isSelected('Recent'),
            false,
          )}
          doClick={() => setFilter({ mode: 'Recent' })}
        />
        <SelectButton
          name="2020"
          className={yearClassName(
            '2020',
            isSelected('Year', '2020') ,
            isEmpty('2020'),
          )}
          doClick={() => isEmpty('2020') || setFilter({ mode: 'Year', year: '2020', month: 'All' })}
        />
        <SelectButton
          name="2019"
          className={yearClassName(
            '2019',
            isSelected('Year', '2019'),
            isEmpty('2019'),
          )}
          doClick={() => isEmpty('2019') || setFilter({ mode: 'Year', year: '2019', month: 'All' })}
        />
        <SelectButton
          name="2018"
          className={yearClassName(
            '2018',
            isSelected( 'Year', '2018'),
            isEmpty('2018'),
          )}
          doClick={() => isEmpty('2018') || setFilter({ mode: 'Year', year: '2018', month: 'All' })}
        />
        {mode === 'Recent' ? (
          <React.Fragment>
            <SelectButton
              name="5 recent"
              className={`monthBtn recent5 ${(recentCount === 5 && 'selected')}`}
              doClick={() =>
                setFilter({ mode: 'Recent', recentCount: 5 })
              }
            />
            <SelectButton
              name="10 recent"
              className={`monthBtn recent10 ${recentCount === 10 && 'selected'}`}
              doClick={() =>
                setFilter({ mode: 'Recent', recentCount: 10 })
              }
            />
            <SelectButton
              name="20 recent"
              className={`monthBtn recent20 ${recentCount === 20 && 'selected'}`}
              doClick={() =>
                setFilter({ mode: 'Recent', recentCount: 20 })
              }
            />

          </React.Fragment>
        ) : (
          <React.Fragment>
            <SelectButton
              name="January"
              className={monthClassName(
                'January',
                isSelected('Month', 'January'),
                isEmpty(year, 'January'),
              )}
              doClick={() => setFilter({ mode: 'Month', year: year, month: 'January' })}
            />
            <SelectButton
              name="February"
              className={monthClassName(
                'February',
                isSelected('Month', 'February'),
                isEmpty(year, 'February'),
              )}
              doClick={() => setFilter({ mode: 'Month', year: year, month: 'February' })}
            />
            <SelectButton
              name="March"
              className={monthClassName(
                'March',
                isSelected('Month', 'March'),
                isEmpty(year, 'March'),
              )}
              doClick={() => setFilter({ mode: 'Month', year: year, month: 'March' })}
            />
            <SelectButton
              name="April"
              className={monthClassName(
                'April',
                isSelected('Month', 'April'),
                isEmpty(year, 'April'),
              )}
              doClick={() => setFilter({ mode: 'Month', year: year, month: 'April' })}
            />
            <SelectButton
              name="May"
              className={monthClassName(
                'May',
                isSelected('Month', 'May'),
                isEmpty(year, 'May'),
              )}
              doClick={() => setFilter({ mode: 'Month', year: year, month: 'May' })}
            />
            <SelectButton
              name="June"
              className={monthClassName(
                'June',
                isSelected('Month', 'June'),
                isEmpty(year, 'June'),
              )}
              doClick={() => setFilter({ mode: 'Month', year: year, month: 'June' })}
            />
            <SelectButton
              name="July"
              className={monthClassName(
                'July',
                isSelected('Month', 'July'),
                isEmpty(year, 'July'),
              )}
              doClick={() => setFilter({ mode: 'Month', year: year, month: 'July' })}
            />
            <SelectButton
              name="August"
              className={monthClassName(
                'August',
                isSelected('Month', 'August'),
                isEmpty(year, 'August'),
              )}
              doClick={() => setFilter({ mode: 'Month', year: year, month: 'August' })}
            />
            <SelectButton
              name="September"
              className={monthClassName(
                'September',
                isSelected('Month', 'September'),
                isEmpty(year, 'September'),
              )}
              doClick={() => setFilter({ mode: 'Month', year: year, month: 'September' })}
            />
            <SelectButton
              name="October"
              className={monthClassName(
                'October',
                isSelected('Month', 'October'),
                isEmpty(year, 'October'),
              )}
              doClick={() => setFilter({ mode: 'Month', year: year, month: 'October' })}
            />
            <SelectButton
              name="November"
              className={monthClassName(
                'November',
                isSelected('Month', 'November'),
                isEmpty(year, 'November'),
              )}
              doClick={() => setFilter({ mode: 'Month', year: year, month: 'November' })}
            />
            <SelectButton
              name="December"
              className={monthClassName(
                'December',
                isSelected('Month', 'December'),
                isEmpty(year, 'December'),
              )}
              doClick={() => setFilter({ mode: 'Month', year: year, month: 'December' })}
            />
          </React.Fragment>
        )}
      </ul>
      {children}
      <SummaryList posts={currentPosts} title={title} />
    </section>
  )
}

const PostNav = ({}) => {
}

PostHome.defaultProps = {
  className: '',
}

export default PostHome
