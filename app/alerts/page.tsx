import React from 'react'

export default function AlertsPage(){
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold">Alertes</h1>
      <p className="mt-2 text-slate-200">Préparé pour alertes par courriel et notifications push. Aucune alerte réelle envoyée sans sources data.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-night/60 rounded-lg">
          <h3 className="font-semibold">Préférences</h3>
          <p className="mt-2 text-slate-300">Gestion des préférences individuelles et désabonnement.</p>
        </div>
        <div className="p-4 bg-night/60 rounded-lg">
          <h3 className="font-semibold">Historique des notifications</h3>
          <p className="mt-2 text-slate-300">Historique local enregistré uniquement après configuration.</p>
        </div>
      </div>
    </div>
  )
}
