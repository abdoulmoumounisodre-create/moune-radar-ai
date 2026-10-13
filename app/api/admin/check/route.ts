import { NextResponse } from 'next/server'

export async function GET(){
  // Administration checks must be performed server-side.
  const adminSecret = process.env.ADMIN_SECRET || process.env.SUPABASE_SERVICE_ROLE
  if(!adminSecret){
    return NextResponse.json({ error: 'Administration non configurée. Définissez ADMIN_SECRET côté serveur.' }, { status: 403 })
  }
  return NextResponse.json({ ok: true })
}
