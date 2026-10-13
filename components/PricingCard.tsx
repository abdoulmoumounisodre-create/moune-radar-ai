import React from 'react'

export const PricingCard = ({title, price, frequency, features, ctaLabel, premium}:{title:string, price:string, frequency:string, features:string[], ctaLabel:string, premium?:boolean}) => {
  return (
    <div className={`p-6 rounded-lg ${premium ? 'bg-gradient-to-br from-[#13263F] to-[#0b2b46]' : 'bg-night/60'} border border-slate-700`}>
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-sm text-slate-300">{title}</div>
          <div className="text-2xl font-bold mt-2">{price} <span className="text-sm">/{frequency}</span></div>
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-slate-300">
        {features.map((f,i)=> <li key={i}>• {f}</li>)}
      </ul>
      <div className="mt-6">
        <button className={`${premium ? 'bg-turquoise text-night' : 'bg-electric text-night'} px-4 py-2 rounded-md font-semibold`}>{ctaLabel}</button>
      </div>
    </div>
  )
}
