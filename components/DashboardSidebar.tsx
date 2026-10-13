import React from 'react'

export const DashboardSidebar = () => {
  return (
    <div className="p-4 bg-night/60 rounded-lg">
      <nav className="flex flex-col gap-3">
        <a className="text-slate-200">Mes destinations favorites</a>
        <a className="text-slate-200">Mes alertes</a>
        <a className="text-slate-200">Mes préférences</a>
        <a className="text-slate-200">Mon abonnement</a>
        <a className="text-slate-200">Historique</a>
        <a className="text-slate-200">Notifications</a>
      </nav>
    </div>
  )
}
