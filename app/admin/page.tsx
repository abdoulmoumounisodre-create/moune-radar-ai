import React from 'react'

export default function AdminPage(){
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold">Administration</h1>
      <p className="mt-2 text-slate-200">Espace administrateur protégé. Les droits doivent être vérifiés côté serveur.</p>

      <div className="mt-6 p-6 bg-night/60 rounded-lg">
        <p className="text-slate-300">Endpoints d'administration (gestion des offres, utilisateurs, alertes, abonnements) sont préparés côté serveur mais inactifs tant que les clés et rôles ne sont pas configurés.</p>
      </div>
    </div>
  )
}
