import React from 'react'
import Link from 'next/link'

export function Footer(){
  return (
    <footer className="bg-night/95 text-slate-300 mt-12 border-t border-night/60">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <div className="font-bold text-offwhite">MouneRadar AI</div>
          <div className="mt-2 text-sm">L'IA qui repère les vols à prix cassés.</div>
        </div>
        <div className="flex gap-4">
          <Link href="/legal/terms">Conditions</Link>
          <Link href="/legal/privacy">Confidentialité</Link>
          <Link href="/legal/subscription">Abonnement</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
