# AcquaVitta V7

Repository-ready Next.js foundation for Vercel.

## Local setup
1. Copy `.env.example` to `.env.local`.
2. Add Supabase project URL and anon key.
3. Run `npm install` and `npm run dev`.

## Vercel
Add the same two environment variables in Project Settings > Environment Variables.

## Important
Registration/login UI is connected to Supabase when environment variables are configured. Before commercial launch, protect `/catalog` and `/account` server-side, add email verification, rate limiting, bot protection, consent audit records, legal review, and an approved payment processor. No card data should be stored by this application.
