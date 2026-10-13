import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import FloatingMascot from '../components/FloatingMascot'

export const metadata: Metadata = {
  title: 'MouneRadar AI — L\'IA qui repère les vols à prix cassés',
  description: 'Radar intelligent pour découvrir des vols à prix cassés. Pré-lancement — plateforme d\'alertes de billets d\'avion.',
  openGraph: {
    title: 'MouneRadar AI',
    description: 'L\'IA qui repère les vols à prix cassés',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="min-h-[70vh]">
          {children}
        </main>
        <Footer />
        <FloatingMascot />
      </body>
    </html>
  )
}
