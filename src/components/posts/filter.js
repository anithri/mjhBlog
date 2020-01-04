import {categorizePosts} from './utils'

export const reducer = (state, action) => {
  const {selected, categorized} = state
  let category
  switch (action.type) {
  case 'updateYear':
    if (!action.year) throw new Error()
    category = action.year === 'All' ?
      'All' :
      (selected.month === 'All' ? action.year : `${action.year} - ${selected.month}`)

    return {
      ...state,
      selected: {
        ...selected,
        year: action.year,
        month: action.year === 'All' ? 'All' : selected.month,
        posts: categorized[action.year][selected.month],
        category,
        all: action.year === 'All',
        isSelected: year => (year === action.year) && 'selected'
      }
    }
  case 'updateMonth':
    if (!action.month) throw new Error()
    category = selected.year === 'All' ?
      'All' :
      (action.month === 'All' ? selected.year : `${action.year} - ${selected.month}`)

    return {
      ...state,
      selected: {
        ...selected,
        month: action.month,
        posts: categorized[selected.year][action.month],
        all: selected.year === 'All',
        category,
      },
        isSelected:
          (month, forAll = false) => forAll ? [selected.month, 'All'].includes(action.month) : selected.month === action.month
    }
  default:
    throw new Error()
  }
}
