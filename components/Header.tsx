import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/logo.svg'

export function Header(){
  return (
    <header className="bg-night/95 text-offwhite border-b border-night/60">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="MouneRadar AI" width={160} height={42} />
        </Link>
        <nav className="hidden md:flex gap-4 items-center">
          <Link href="/search" className="text-slate-200 hover:text-electric">Recherche</Link>
          <Link href="/pricing" className="text-slate-200 hover:text-electric">Abonnements</Link>
          <Link href="/assistant" className="text-slate-200 hover:text-electric">Assistant IA</Link>
          <Link href="/dashboard" className="text-slate-200 hover:text-electric">Tableau de bord</Link>
          <Link href="/auth/signin" className="bg-electric text-night px-3 py-2 rounded">Connexion</Link>
        </nav>
      </div>
    </header>
  )
}
