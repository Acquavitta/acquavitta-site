# AcquaVitta V8

A verified, deploy-ready Next.js foundation for Vercel.

## Verified locally

- `npm install`
- `npm run build`
- Static route generation
- No required environment variables
- No live form submission
- No payment-card handling

## Important production limitation

The registration and login pages are interface scaffolds only. They intentionally do not collect or store customer data. Before commercial launch, connect a production identity provider with email verification, server-side sessions, password recovery, rate limiting, audit records, and versioned acceptance of the age and research-use declarations.

## GitHub upload

Replace the repository contents with the files inside this folder. Commit to `main`; Vercel should deploy automatically.
