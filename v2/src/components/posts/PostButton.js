import React from 'react'

export const PostButton = ({
  name,
  className,
  children,
  doClick,
  visibility
}) => {
  console.log('PostButton',name, visibility)
  return (
    <li className={`${className} ${visibility || ''}`} onClick={doClick}>
      {children ? { children } : <span>{name}</span>}
    </li>
  )
}
