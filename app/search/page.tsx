import React from 'react'

export default function SearchPage(){
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Recherche de vols</h1>
      <p className="mt-2 text-slate-200">Interface de recherche prête — connectez une API aérienne pour activer les résultats.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-night/60 rounded-lg">
          <label className="block font-medium">Ville de départ</label>
          <input className="mt-2 w-full rounded-md p-2 bg-transparent border border-slate-700" placeholder="Ex: Montréal (YUL)" />

          <label className="block font-medium mt-4">Destination</label>
          <input className="mt-2 w-full rounded-md p-2 bg-transparent border border-slate-700" placeholder="Ex: Paris ou Monde entier" />

          <label className="block font-medium mt-4">Budget maximum</label>
          <input className="mt-2 w-full rounded-md p-2 bg-transparent border border-slate-700" placeholder="Ex: 800 $" />

          <label className="block font-medium mt-4">Dates flexibles</label>
          <select className="mt-2 w-full rounded-md p-2 bg-transparent border border-slate-700">
            <option>±3 jours</option>
            <option>±7 jours</option>
            <option>±14 jours</option>
          </select>
        </div>

        <div className="p-6 bg-night/60 rounded-lg">
          <label className="block font-medium">Réduction minimale</label>
          <input className="mt-2 w-full rounded-md p-2 bg-transparent border border-slate-700" placeholder="Ex: 30%" />

          <label className="block font-medium mt-4">Nombre de voyageurs</label>
          <input className="mt-2 w-full rounded-md p-2 bg-transparent border border-slate-700" placeholder="1" />

          <label className="block font-medium mt-4">Préférences d'escales</label>
          <select className="mt-2 w-full rounded-md p-2 bg-transparent border border-slate-700">
            <option>Direct</option>
            <option>1 escale</option>
            <option>Sans préférence</option>
          </select>

          <div className="mt-6">
            <button className="bg-electric text-night px-4 py-2 rounded-md font-semibold">Lancer la recherche</button>
          </div>

          <div className="mt-6 text-yellow-300">Recherche de vols en préparation.</div>

        </div>
      </div>

      <div className="mt-8 text-slate-300">Composants prêts pour connecter une API aérienne ultérieurement. Les boutons et formulaires sont des placeholders — aucune recherche réelle n\'est exécutée tant qu\'aucune intégration n\'est configurée.</div>
    </div>
  )
}
