import Stripe from 'stripe'
import {db,safeError} from '../../../../lib/server'
export async function POST(req:Request){try{
 const key=process.env.STRIPE_SECRET_KEY,secret=process.env.STRIPE_WEBHOOK_SECRET
 if(!key||!secret)return Response.json({error:'Webhook non configuré.'},{status:503})
 const stripe=new Stripe(key,{apiVersion:'2022-11-15'})
 const signature=req.headers.get('stripe-signature')
 if(!signature)return Response.json({error:'Signature absente.'},{status:400})
 let event:Stripe.Event
 try{event=stripe.webhooks.constructEvent(await req.text(),signature,secret)}catch{return Response.json({error:'Signature invalide.'},{status:400})}
 if(event.type==='checkout.session.completed'){
  const session=event.data.object as Stripe.Checkout.Session
  const userId=session.client_reference_id
  if(userId&&session.subscription){const sub=await stripe.subscriptions.retrieve(String(session.subscription));const {error}=await db().from('subscriptions').upsert({user_id:userId,stripe_customer_id:String(session.customer),stripe_subscription_id:sub.id,status:sub.status},{onConflict:'user_id'});if(error)throw error}
 }
 if(event.type==='customer.subscription.updated'||event.type==='customer.subscription.deleted'){
  const sub=event.data.object as Stripe.Subscription
  const {error}=await db().from('subscriptions').update({status:sub.status}).eq('stripe_subscription_id',sub.id);if(error)throw error
 }
 return Response.json({received:true})
 }catch(e){return safeError(e)}}
