-- Exécuter dans Supabase SQL Editor (projet MouneRadar uniquement).
create table if not exists public.flight_alerts (
 id uuid primary key default gen_random_uuid(),
 user_id uuid not null references auth.users(id) on delete cascade,
 origin text not null check (origin ~ '^[A-Z]{3}$'),
 destination text not null check (destination ~ '^[A-Z]{3}$'),
 departure_date date not null,
 return_date date,
 max_price numeric(12,2) not null check (max_price>0),
 active boolean not null default true,
 last_price numeric(12,2),
 last_checked_at timestamptz,
 last_notified_at timestamptz,
 created_at timestamptz not null default now()
);
create index if not exists flight_alerts_user_idx on public.flight_alerts(user_id);
alter table public.flight_alerts enable row level security;
drop policy if exists "read own alerts" on public.flight_alerts;
create policy "read own alerts" on public.flight_alerts for select to authenticated using (auth.uid()=user_id);
drop policy if exists "insert own alerts" on public.flight_alerts;
create policy "insert own alerts" on public.flight_alerts for insert to authenticated with check (auth.uid()=user_id);
drop policy if exists "delete own alerts" on public.flight_alerts;
create policy "delete own alerts" on public.flight_alerts for delete to authenticated using (auth.uid()=user_id);
create table if not exists public.subscriptions (
 user_id uuid primary key references auth.users(id) on delete cascade,
 stripe_customer_id text,
 stripe_subscription_id text unique,
 status text not null default 'inactive',
 updated_at timestamptz not null default now()
);
alter table public.subscriptions enable row level security;
drop policy if exists "read own subscription" on public.subscriptions;
create policy "read own subscription" on public.subscriptions for select to authenticated using (auth.uid()=user_id);
