import React from 'react'

export default function SignUp(){
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold">Inscription</h1>
      <p className="mt-2 text-slate-200">Créer un compte (Supabase Auth prévu).</p>
      <div className="mt-6 p-6 bg-night/60 rounded-lg">
        <label className="block">Email</label>
        <input className="mt-2 w-full rounded-md p-2 bg-transparent border border-slate-700" />
        <label className="block mt-4">Mot de passe</label>
        <input type="password" className="mt-2 w-full rounded-md p-2 bg-transparent border border-slate-700" />
        <div className="mt-4">
          <button className="bg-electric text-night px-4 py-2 rounded-md">Créer un compte</button>
        </div>
        <div className="mt-4 text-yellow-300">Si Supabase n'est pas configuré, l'inscription n'est pas fonctionnelle.</div>
      </div>
    </div>
  )
}
