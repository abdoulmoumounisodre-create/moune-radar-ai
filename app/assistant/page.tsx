import React from 'react'

export default function AssistantPage(){
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold">MouneRadar Assistant</h1>
      <p className="mt-2 text-slate-200">Interface conversationnelle pour interroger l'assistant IA.</p>

      <div className="mt-6 p-6 bg-night/60 rounded-lg">
        <p className="text-slate-300">Exemple : "Je cherche un vol de Montréal vers l'Afrique pour moins de 800 $."</p>

        <div className="mt-4">
          <textarea className="w-full p-3 rounded-md bg-transparent border border-slate-700" rows={4} placeholder="Décrivez votre recherche..."></textarea>
          <div className="mt-3 flex gap-3">
            <button className="bg-electric text-night px-4 py-2 rounded-md font-semibold">Envoyer</button>
            <button className="border border-slate-600 px-4 py-2 rounded-md">Effacer</button>
          </div>
        </div>

        <div className="mt-6 text-yellow-300">Assistant IA bientôt disponible. Aucune clé API OpenAI n'est configurée.</div>
      </div>

    </div>
  )
}
