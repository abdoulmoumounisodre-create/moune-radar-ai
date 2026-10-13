import Link from 'next/link'
export function Header(){
 const nav=[['/search','Recherche'],['/pricing','Abonnements'],['/assistant','Assistant IA'],['/dashboard','Tableau de bord'],['/auth/signin','Connexion']]
 return <header className="bg-[#081426] text-white border-b border-slate-700/60 sticky top-0 z-40"><div className="container mx-auto px-5 py-4 flex flex-wrap items-center justify-between gap-3"><Link href="/" className="flex items-center gap-2 font-extrabold text-lg"><span className="rounded-xl bg-[#3973F6] px-3 py-2 text-white">M</span><span>Moune<span className="text-[#24D7B3]">Radar AI</span></span></Link><nav aria-label="Navigation principale" className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">{nav.map(([href,label])=><Link key={href} href={href} className="text-slate-200 hover:text-[#24D7B3]">{label}</Link>)}</nav></div></header>
}
