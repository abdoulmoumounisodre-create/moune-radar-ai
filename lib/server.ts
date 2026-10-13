import { createClient } from '@supabase/supabase-js'

export function db(){
 const url=process.env.NEXT_PUBLIC_SUPABASE_URL, key=process.env.SUPABASE_SERVICE_ROLE_KEY
 if(!url||!key) throw new Error('Supabase serveur non configuré')
 return createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}})
}
export async function userFromRequest(req:Request){
 const token=req.headers.get('authorization')?.replace(/^Bearer\s+/i,'')
 if(!token) return null
 const {data,error}=await db().auth.getUser(token)
 return error?null:data.user
}
export function safeError(error:unknown){console.error(error);return Response.json({error:'Service temporairement indisponible.'},{status:503})}
