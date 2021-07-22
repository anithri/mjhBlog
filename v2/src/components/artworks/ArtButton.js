import React from 'react'

export const ArtButton = ({
  name,
  className,
  children,
  doClick,
  visibility
}) => {
  console.log('ArtButton',name, visibility)
  return (
    <li className={`${className} ${visibility || ''}`} onClick={doClick}>
      {children ? { children } : <span>{name}</span>}
    </li>
  )
}
