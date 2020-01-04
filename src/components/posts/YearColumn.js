import React from 'react'
import { SelectButton } from './SelectButton'

export const YearColumn = ({ className, years, selected, dispatch }) => {
  const yearButtons = years.map(year => {
    const isSelected = selected.isSelected(year)
    const className = [className,isSelected].filter(c=>c).join(' ')
    return (
        <SelectButton
          name={year}
          key={`select-${year}`}
          className={className}
          doClick={() => selected.year === year || dispatch({ type: 'updateYear', year })}
        />
    )
  })
  return <React.Fragment>{yearButtons}</React.Fragment>
}

//   const yearButtons = years.map(year => {
//     const isSelected = selected.isSelected(year)
//     const className = ['yearBtn', isSelected].filter(c => c).join(' ')
//
//     return <SelectButton
//       name={year}
//       className={className}
//       key={`select-${year}`}
//       doClick={() => isSelected || dispatch({ type: 'updateYear', year })}
//     />
//   })
