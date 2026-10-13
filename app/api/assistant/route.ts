import {NextResponse} from 'next/server'
export async function POST(req:Request){
 let message='';try{const x=await req.json();message=typeof x?.message==='string'?x.message.trim():''}catch{return NextResponse.json({error:'Requête invalide.'},{status:400})}
 if(!message||message.length>1500)return NextResponse.json({error:'Message de 1 à 1500 caractères requis.'},{status:400})
 const key=process.env.OPENAI_API_KEY
 if(!key)return NextResponse.json({error:'Assistant IA non activé.'},{status:503})
 try{const r=await fetch('https://api.openai.com/v1/chat/completions',{method:'POST',headers:{Authorization:'Bearer '+key,'Content-Type':'application/json'},body:JSON.stringify({model:process.env.OPENAI_MODEL||'gpt-4o-mini',max_tokens:400,messages:[{role:'system',content:'Tu es Moune, assistant de voyage francophone de MouneRadar AI. Aide à planifier les vols. Tu n’as accès à aucun tarif en direct dans cette conversation. Ne fabrique jamais de prix, de disponibilité ou de réservation. Réponds brièvement.'},{role:'user',content:message}] }),cache:'no-store'});if(!r.ok)throw Error('AI '+r.status);const j=await r.json();return NextResponse.json({reply:j.choices?.[0]?.message?.content||'Réponse indisponible.'})}catch(e){console.error(e);return NextResponse.json({error:'Assistant temporairement indisponible.'},{status:503})}
}
