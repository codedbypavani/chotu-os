# Chotu OS

Chotu OS is a Phase 1 foundation for a futuristic student productivity and coding ecosystem: dashboard shell, animated widgets, Firebase Google auth seams, Supabase realtime seams, theme system, and a reusable architecture ready for the next feature phases.

## Phase 1 Includes

- Next.js 16 App Router with TypeScript and Tailwind CSS 4
- Framer Motion animation layer and responsive dashboard shell
- Dark/light theme switching with `next-themes`
- Firebase Google authentication with persistent client sessions
- Supabase client, schema starter, and realtime subscription hooks
- Animated productivity widgets, XP/streak cards, focus timer, coding platform cards, heatmap, personal coding room, anti-doomscroll nudge, and floating Chotu companion

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and fill these values:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Firebase auth works after enabling Google sign-in in Firebase Console. Supabase realtime works after running `supabase/schema.sql` and enabling realtime for the tables.

## Next Phases

1. Real CRUD for tasks, notes, streaks, focus sessions, and coding stats.
2. Coding platform adapters for LeetCode, CodeChef, Codeforces, HackerRank, GitHub.
3. Full focus mode with keyboard shortcuts, ambience, and session scoring.
4. Chotu emotional state engine based on inactivity, streaks, and achievements.
5. PWA icons, push notifications, offline cache strategy, and deploy hardening.
