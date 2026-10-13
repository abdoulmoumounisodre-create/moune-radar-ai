"use client"

import React, { useState } from 'react'

export default function ChatWidget({ onClose }: { onClose: ()=>void }){
  const [messages, setMessages] = useState<Array<{from:'user'|'assistant', text:string}>>([
    { from: 'assistant', text: "Salut ! Moi, c'est Moune — ton assistant. Comment puis-je t'aider aujourd'hui ?" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSend(){
    if(!input.trim()) return
    const userText = input
    setMessages(prev => [...prev, { from: 'user', text: userText }])
    setInput('')
    setLoading(true)

    try{
      const res = await fetch('/api/assistant', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: userText }) })
      const data = await res.json()
      if(res.ok){
        // when implemented, server will return assistant reply
        setMessages(prev => [...prev, { from: 'assistant', text: data.reply || 'Assistant répondu.' }])
      } else {
        setMessages(prev => [...prev, { from: 'assistant', text: data.error || 'Assistant IA bientôt disponible.' }])
      }
    } catch(e){
      setMessages(prev => [...prev, { from: 'assistant', text: 'Erreur de connexion au service IA.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-80 md:w-96 bg-night/95 rounded-xl shadow-xl border border-slate-700 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-night/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-turquoise">
            <img src="/mascot.png" alt="Moune" onError={(e)=>{ (e.target as HTMLImageElement).src = '/mascot.png' }} />
          </div>
          <div>
            <div className="font-semibold text-offwhite">Moune — Assistant IA</div>
            <div className="text-xs text-slate-400">Conversation</div>
          </div>
        </div>
        <div>
          <button aria-label="Fermer le chat" className="text-slate-300 hover:text-offwhite" onClick={onClose}>✕</button>
        </div>
      </div>

      <div className="p-3 max-h-64 overflow-y-auto space-y-3 bg-gradient-to-b from-night/90 to-[#041423]">
        {messages.map((m, idx) => (
          <div key={idx} className={`${m.from === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`${m.from === 'user' ? 'inline-block bg-electric text-night' : 'inline-block bg-[#0f2338] text-slate-300'} px-3 py-2 rounded-md`}>{m.text}</div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-night/60">
        <div className="flex gap-2">
          <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Écris un message..." className="flex-1 p-2 rounded-md bg-transparent border border-slate-700 text-slate-100" />
          <button className="bg-turquoise text-night px-3 py-2 rounded-md" onClick={handleSend} disabled={loading}>{loading ? '…' : 'Envoyer'}</button>
        </div>
        <div className="mt-2 text-xs text-slate-400">Assistant IA bientôt disponible — aucune clé configurée.</div>
      </div>
    </div>
  )
}
