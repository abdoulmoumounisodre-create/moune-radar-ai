import React from 'react'

export const FlightCardDemo = ({variant}:{variant?:string}) => {
  return (
    <div className="p-4 bg-gradient-to-r from-[#071A2B] to-[#0b2b46] rounded-lg border border-slate-700">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-sm text-slate-300">MON ⇢ PAR</div>
          <div className="text-xl font-bold">Exemple — Offre fictive</div>
          <div className="text-sm text-slate-400">Économie estimée: 38% (démonstration)</div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-electric">249 $</div>
          <div className="text-sm text-slate-400">Aller-retour</div>
        </div>
      </div>
      <div className="mt-3">
        <span className="text-xs uppercase px-2 py-1 bg-night/40 rounded">Fictif - démo</span>
      </div>
    </div>
  )
}
