import { timingSafeEqual } from "node:crypto";
import { getVercelOidcToken } from "@vercel/oidc";

// Deployed on Vercel only. Sites calls this server-to-server; no secret is public.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const reply = (data: unknown, status = 200) => Response.json(data, {
  status, headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" },
});
const system = "Tu es Moune, le compagnon de voyage francophone de MouneRadar AI. Aide à préciser départ, destination, dates, voyageurs et budget total en dollars canadiens. Réponds brièvement et chaleureusement. Tu ne disposes d’aucun outil de recherche ni de prix en direct dans cette conversation. N’invente jamais tarif, réduction, disponibilité, réservation ou alerte active. Les trajets locaux sont des critères enregistrés, pas une veille automatique. Oriente vers /search/ et /alerts/ si utile. Ne demande ni mot de passe, ni clé, ni carte bancaire. Les paiements Premium ne sont pas activés.";

export async function POST(req: Request) {
  const expected = process.env.MOUNE_RELAY_SECRET;
  const actual = req.headers.get("authorization")?.replace(/^Bearer /, "") || "";
  if (!expected || Buffer.byteLength(actual) !== Buffer.byteLength(expected) || !timingSafeEqual(Buffer.from(actual), Buffer.from(expected)))
    return reply({ error: "Accès refusé." }, 401);
  try {
    const raw = await req.text();
    if (raw.length > 18000) return reply({ error: "Message trop volumineux." }, 413);
    let x: any;
    try { x = JSON.parse(raw); } catch { return reply({ error: "Requête invalide." }, 400); }
    if (typeof x?.message !== "string" || !x.message.trim() || x.message.length > 1500)
      return reply({ error: "Message de 1 à 1 500 caractères requis." }, 400);
    let token: string | undefined;
    try { token = await getVercelOidcToken(); } catch { /* unavailable until OIDC is enabled */ }
    if (!token) return reply({ error: "L’identité IA du serveur n’est pas activée.", code: "AI_AUTH_MISSING" }, 503);
    const history = Array.isArray(x.history) ? x.history
      .filter((m: any) => m && ["user", "assistant"].includes(m.role) && typeof m.content === "string")
      .slice(-8).map((m: any) => ({ role: m.role, content: m.content.slice(0, 1500) })) : [];
    const r = await fetch("https://ai-gateway.vercel.sh/v1/chat/completions", {
      method: "POST", cache: "no-store",
      headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
      body: JSON.stringify({ model: process.env.AI_GATEWAY_MODEL || "openai/gpt-4o-mini", max_tokens: 400,
        messages: [{ role: "system", content: system }, ...history, { role: "user", content: x.message.trim() }] }),
      signal: AbortSignal.timeout(25000),
    });
    if (!r.ok) {
      const code = r.status === 402 ? "AI_BUDGET" : r.status === 429 ? "AI_RATE_LIMIT" : r.status === 401 || r.status === 403 ? "AI_AUTH" : "AI_UPSTREAM";
      console.error("Moune AI gateway", { status: r.status, code });
      return reply({ error: "Moune IA est temporairement indisponible. Le mode guidé reste disponible.", code }, r.status === 429 ? 429 : 503);
    }
    const d = await r.json();
    const text = d.choices?.[0]?.message?.content;
    if (typeof text !== "string" || !text.trim()) return reply({ error: "Réponse indisponible.", code: "AI_EMPTY" }, 503);
    return reply({ reply: text.slice(0, 8000) });
  } catch {
    return reply({ error: "Moune IA est temporairement indisponible.", code: "AI_UNAVAILABLE" }, 503);
  }
}
