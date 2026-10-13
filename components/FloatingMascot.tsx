"use client"

import React, { useState } from 'react'
import Mascot from './Mascot'
import ChatWidget from './ChatWidget'

export default function FloatingMascot(){
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3">
        <div className="flex items-center gap-3">
          <div className="hidden sm:block bg-night/80 text-slate-100 px-3 py-2 rounded-lg shadow">Salut ! Moi, c'est Moune. Je t'aide à trouver les meilleurs vols ! ✈️</div>
          <button aria-label="Ouvrir l'assistant Moune" className="w-14 h-14 rounded-full overflow-hidden border-2 border-electric shadow-lg bg-offwhite/5" onClick={()=>setOpen(true)}>
            <Mascot variant="portrait" alt="Moune — assistant" className="moune-avatar" size="56px" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed right-4 bottom-20 z-50">
          <ChatWidget onClose={()=>setOpen(false)} />
        </div>
      )}
    </>
  )
}
