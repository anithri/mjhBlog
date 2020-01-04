import React from 'react'
import { SelectButton } from './SelectButton'

export const MonthsGrid = ({ className, months, selected, dispatch }) => {
  const monthButtons = months.map(month => {
    const selectedClass = selected.isSelected(month)
    const emptyClass = selected.posts.length === 0 && 'empty'
    const className = [className, selectedClass, emptyClass]
      .filter(c => c)
      .join(' ')
    return (
      <SelectButton
        name={selected.month}
        className={className}
        key={`select-${month}`}
        doClick={() =>
          selected.month === month || dispatch({ type: 'updateMonth', month })
        }
      />
    )
  })
  return <React.Fragment>{monthButtons}</React.Fragment>
}
