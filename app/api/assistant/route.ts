import { NextResponse } from 'next/server'

export async function POST(req: Request){
  // Placeholder server route for assistant — never expose API keys to the browser.
  const OPENAI_KEY = process.env.OPENAI_API_KEY
  if(!OPENAI_KEY){
    return NextResponse.json({ error: 'Assistant IA bientôt disponible.' }, { status: 501 })
  }

  // When configured, implement server-side call to the model here.
  return NextResponse.json({ error: 'Assistant IA non configuré dans cette version.' }, { status: 501 })
}
