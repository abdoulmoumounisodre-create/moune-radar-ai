import React from 'react'
import { PricingCard } from '../../components/PricingCard'

export default function PricingPage(){
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Abonnements</h1>
      <p className="mt-2 text-slate-200">Choisissez une offre. Les paiements réels ne sont pas activés tant que Stripe n'est pas configuré.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <PricingCard title="GRATUIT" price="0 $" frequency="mois" features={["Inscription gratuite","Accès aux aubaines publiques","Alertes générales","Préférences de base"]} ctaLabel="S'inscrire" />
        <PricingCard title="PREMIUM IA" price="29,99 $ CAD" frequency="mois" features={["Alertes personnalisées","Plusieurs villes de départ","Notifications prioritaires","Assistant IA avancé","Historique des prix"]} ctaLabel="Choisir Premium IA" premium />
      </div>

      <div className="mt-6 text-yellow-300">Abonnements non commercialisés — configuration Stripe requise pour activer les paiements.</div>
    </div>
  )
}
