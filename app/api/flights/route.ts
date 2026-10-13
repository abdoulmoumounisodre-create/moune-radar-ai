import {NextResponse} from 'next/server'
export const dynamic='force-dynamic'
export async function GET(req:Request){
 const q=new URL(req.url).searchParams
 const origin=(q.get('origin')||'').toUpperCase(),destination=(q.get('destination')||'').toUpperCase(),date=q.get('depart')||'',returnDate=q.get('returnDate')||''
 if(!/^[A-Z]{3}$/.test(origin)||!/^[A-Z]{3}$/.test(destination)||!/^\d{4}-\d{2}-\d{2}$/.test(date)||Number.isNaN(Date.parse(date))||date<new Date().toISOString().slice(0,10)|| (returnDate&&(!/^\d{4}-\d{2}-\d{2}$/.test(returnDate)||returnDate<date)))return NextResponse.json({error:'Indiquez deux codes aéroport IATA (ex. YUL, CDG) et des dates valides.'},{status:400})
 const id=process.env.AMADEUS_CLIENT_ID,secret=process.env.AMADEUS_CLIENT_SECRET
 if(!id||!secret)return NextResponse.json({error:'Recherche réelle non activée : clés Amadeus manquantes.'},{status:503})
 try{
  const host=process.env.AMADEUS_ENV==='production'?'https://api.amadeus.com':'https://test.api.amadeus.com'
  const auth=await fetch(host+'/v1/security/oauth2/token',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({grant_type:'client_credentials',client_id:id,client_secret:secret}),cache:'no-store'})
  if(!auth.ok)throw Error('Amadeus authentication '+auth.status)
  const token=await auth.json()
  const params=new URLSearchParams({originLocationCode:origin,destinationLocationCode:destination,departureDate:date,adults:'1',currencyCode:'CAD',max:'12'})
  if(returnDate)params.set('returnDate',returnDate)
  const r=await fetch(host+'/v2/shopping/flight-offers?'+params,{headers:{Authorization:'Bearer '+token.access_token},cache:'no-store'})
  const body=await r.json()
  if(!r.ok)return NextResponse.json({error:'Le fournisseur n’a pas pu effectuer cette recherche.',details:body?.errors?.[0]?.detail||''},{status:502})
  const offers=(body.data||[]).map((x:any)=>({id:x.id,price:x.price?.grandTotal,currency:x.price?.currency,airlines:x.validatingAirlineCodes||[],depart:x.itineraries?.[0]?.segments?.[0]?.departure?.at,arrival:x.itineraries?.[0]?.segments?.slice(-1)[0]?.arrival?.at,stops:Math.max(0,(x.itineraries?.[0]?.segments?.length||1)-1)}))
  return NextResponse.json({offers,source:'Amadeus',environment:process.env.AMADEUS_ENV==='production'?'production':'test',notice:'Prix indicatifs, à revérifier avant réservation.'})
 }catch(e){console.error(e);return NextResponse.json({error:'Recherche aérienne momentanément indisponible.'},{status:503})}
}
