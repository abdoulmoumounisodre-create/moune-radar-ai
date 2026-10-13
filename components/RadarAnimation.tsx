import React from 'react'

export const RadarAnimation = () => {
  return (
    <div className="w-full h-56 rounded-lg bg-gradient-to-br from-night via-[#0b2b46] to-[#062033] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-48 h-48 rounded-full border border-turquoise animate-spin-slow" style={{borderColor: 'rgba(36,215,179,0.12)'}}></div>
      </div>
      <div className="relative z-10 text-center">
        <div className="text-sm text-slate-300">Radar</div>
        <div className="mt-2 text-lg font-semibold text-offwhite">Aucune connexion en direct</div>
      </div>
    </div>
  )
}
