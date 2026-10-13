import Stripe from 'stripe'
import {db,userFromRequest,safeError} from '../../../../lib/server'
export async function POST(req:Request){try{
 const user=await userFromRequest(req);if(!user||!user.email)return Response.json({error:'Connexion requise.'},{status:401})
 const key=process.env.STRIPE_SECRET_KEY,price=process.env.STRIPE_PREMIUM_PRICE_ID
 if(!key||!price)return Response.json({error:'Abonnement non activé.'},{status:503})
 const stripe=new Stripe(key,{apiVersion:'2022-11-15'})
 const {data}=await db().from('subscriptions').select('status').eq('user_id',user.id).maybeSingle()
 if(data&&['active','trialing'].includes(data.status))return Response.json({error:'Vous avez déjà un abonnement actif.'},{status:409})
 const base=process.env.NEXT_PUBLIC_SITE_URL||'https://moune-radar-ai.vercel.app'
 const session=await stripe.checkout.sessions.create({mode:'subscription',line_items:[{price,quantity:1}],customer_email:user.email,client_reference_id:user.id,success_url:base+'/dashboard?checkout=success',cancel_url:base+'/pricing?checkout=cancel',metadata:{user_id:user.id}})
 return Response.json({url:session.url})
 }catch(e){return safeError(e)}}
