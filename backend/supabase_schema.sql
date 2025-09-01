-- Run this in Supabase SQL editor
create table if not exists submissions (
  id uuid primary key default gen_random_uuid(),
  username text not null,
  challenge_name text not null,
  code text not null,
  timestamp timestamptz not null default now()
);

create index if not exists idx_submissions_username on submissions(username);

-- Prevent duplicates per (username, challenge_name)
create unique index if not exists uq_user_challenge
  on submissions (username, challenge_name);

-- Example ranking: users who completed all 10, with their final time
-- (first to last submission)
-- NOTE: adjust names if you change challenge_name set
with u as (
  select username,
         min(timestamp) as first_ts,
         max(timestamp) as last_ts,
         count(*) as cnt
  from submissions
  group by username
)
select username, first_ts, last_ts, (last_ts - first_ts) as duration
from u
where cnt >= 10
order by duration asc
limit 10;
