import React from 'react'

export const SearchForm = () => {
  return (
    <form className="bg-night/30 p-4 rounded-md border border-slate-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input placeholder="Ville de départ" className="p-2 rounded-md bg-transparent border border-slate-700" />
        <input placeholder="Destination (ou Monde entier)" className="p-2 rounded-md bg-transparent border border-slate-700" />
        <input placeholder="Budget max" className="p-2 rounded-md bg-transparent border border-slate-700" />
      </div>
      <div className="mt-3 flex gap-3">
        <input type="date" className="p-2 rounded-md bg-transparent border border-slate-700" />
        <input type="date" className="p-2 rounded-md bg-transparent border border-slate-700" />
        <button className="ml-auto bg-electric text-night px-4 py-2 rounded-md">Enregistrer l'alerte</button>
      </div>
    </form>
  )
}
