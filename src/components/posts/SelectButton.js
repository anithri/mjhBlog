import React, { useReducer } from 'react'
import SummaryList from './SummaryList'
import moment from 'moment'
import { categorizePosts } from './utils'
import { reducer } from './filter'

export const SelectButton = ({ name, className, doClick }) => {
  return (
    <li className={className} onClick={doClick}>
      <div>
        <header>{name}</header>
      </div>
    </li>
  )
}
