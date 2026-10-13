import React from 'react'
import Image from 'next/image'
import { SearchForm } from '../components/SearchForm'
import { FlightCardDemo } from '../components/FlightCardDemo'
import { RadarAnimation } from '../components/RadarAnimation'
import Mascot from '../components/Mascot'

export default function Home(){
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-offwhite leading-tight">Voyagez plus. Dépensez moins.</h1>
          <p className="mt-4 text-lg text-slate-200">Votre radar intelligent pour découvrir les meilleures aubaines aériennes.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-electric text-night px-5 py-3 rounded-md font-semibold shadow hover:brightness-95">Activer mon radar gratuitement</button>
            <button className="border border-electric text-electric px-5 py-3 rounded-md font-semibold">Découvrir Premium IA</button>
          </div>
          <div className="mt-8">
            <SearchForm />
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-semibold">Comment ça marche</h3>
            <p className="mt-2 text-slate-200">MouneRadar AI analyse (lorsque vous activez les intégrations) des sources de prix pour identifier des opportunités jusqu\'à 50% d\'économie. Cette page de pré-lancement présente l\'interface et les workflows — aucune donnée réelle n\'est surveillée pour l'instant.</p>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="w-full max-w-md">
            <div className="bg-night/60 rounded-2xl p-6 shadow-xl">
              <RadarAnimation />
              <div className="mt-6 grid gap-4">
                <FlightCardDemo variant="demo" />
                <FlightCardDemo variant="demo" />
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-8 hidden md:block md:-translate-x-6">
            {/* Mascot displayed to the right of the hero on larger screens */}
            <div className="w-56 lg:w-72">
              <Mascot size="280px" className="object-cover" />
            </div>
          </div>

          {/* mobile-friendly lightweight mascot under the main cards */}
          <div className="mt-6 block md:hidden">
            <div className="w-40 mx-auto">
              <Mascot size="160px" />
            </div>
          </div>

        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">Offres de démonstration</h2>
        <p className="text-slate-200 mt-2">Les cartes ci-dessous sont des exemples fictifs pour illustrer l'interface. Elles ne représentent pas des offres réelles.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FlightCardDemo />
          <FlightCardDemo />
          <FlightCardDemo />
        </div>
      </section>
    </div>
  )
}
