import {NextResponse} from 'next/server'
// Ne jamais considérer la présence d'une clé serveur comme une authentification administrateur.
export async function GET(){return NextResponse.json({error:'Accès administrateur désactivé jusqu’à la mise en place d’une vérification de session et de rôle côté serveur.'},{status:403})}
