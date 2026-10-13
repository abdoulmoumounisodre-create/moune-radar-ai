import React from 'react'

export function Button({children, className}: {children: React.ReactNode, className?: string}){
  return (
    <button className={`px-4 py-2 rounded-md font-semibold ${className ?? ''}`}>{children}</button>
  )
}
