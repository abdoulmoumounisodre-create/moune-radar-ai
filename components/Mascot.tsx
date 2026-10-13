"use client"

import React, { useState, useEffect } from 'react'

export default function Mascot({ alt = "Moune — mascotte", className = '', size = 'auto' }: { alt?: string, className?: string, size?: string }){
  const [src, setSrc] = useState('/mascot.png')
  const [errored, setErrored] = useState(false)

  useEffect(() => {
    setSrc('/mascot.png')
    setErrored(false)
  }, [])

  function handleError(){
    if(!errored){
      setErrored(true)
      setSrc('/mascot.png')
    }
  }

  const style: React.CSSProperties = {
    width: size === 'auto' ? undefined : size,
    height: size === 'auto' ? undefined : size,
    maxWidth: '100%'
  }

  return (
    <img src={src} alt={alt} onError={handleError} className={`rounded-xl shadow-xl animate-fade-in-up ${className}`} style={style} />
  )
}
