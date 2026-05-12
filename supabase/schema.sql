create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  user_id text not null,
  title text not null,
  reward integer not null default 0,
  done boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.notes (
  id uuid primary key default gen_random_uuid(),
  user_id text not null,
  body text not null default '',
  updated_at timestamptz not null default now()
);

create table if not exists public.streaks (
  id uuid primary key default gen_random_uuid(),
  user_id text not null unique,
  current integer not null default 0,
  best integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.focus_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id text not null,
  task text not null,
  minutes integer not null,
  score integer not null,
  created_at timestamptz not null default now()
);

create table if not exists public.coding_stats (
  id uuid primary key default gen_random_uuid(),
  user_id text not null,
  platform text not null,
  solved integer not null default 0,
  streak integer not null default 0,
  rating text not null default 'Unrated',
  progress integer not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.tasks enable row level security;
alter table public.notes enable row level security;
alter table public.streaks enable row level security;
alter table public.focus_sessions enable row level security;
alter table public.coding_stats enable row level security;
