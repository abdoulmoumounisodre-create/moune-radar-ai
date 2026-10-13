import React from 'react'
import { DashboardSidebar } from '../../components/DashboardSidebar'

export default function Dashboard(){
  return (
    <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-6">
      <aside className="lg:col-span-1">
        <DashboardSidebar />
      </aside>
      <section className="lg:col-span-3">
        <h1 className="text-2xl font-bold">Tableau de bord</h1>
        <p className="mt-2 text-slate-200">Votre espace personnel. Aucun contenu privé n'est affiché ici dans cette version pré-lancement.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-night/60 rounded-lg">
            <h3 className="font-semibold">Mes destinations favorites</h3>
            <p className="mt-2 text-slate-300">Aucune donnée — connectez votre compte Supabase pour activer.</p>
          </div>
          <div className="p-4 bg-night/60 rounded-lg">
            <h3 className="font-semibold">Mes alertes</h3>
            <p className="mt-2 text-slate-300">Aucune alerte configurée.</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-night/60 rounded-lg">
            <h3 className="font-semibold">Mon abonnement</h3>
            <p className="mt-2 text-slate-300">Aucun abonnement actif dans la version de pré-lancement.</p>
          </div>
          <div className="p-4 bg-night/60 rounded-lg">
            <h3 className="font-semibold">Historique</h3>
            <p className="mt-2 text-slate-300">Aucun historique disponible.</p>
          </div>
        </div>

      </section>
    </div>
  )
}
