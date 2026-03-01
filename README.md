# LEDGIT Frontend

Phase 1 Next.js frontend for the LEDGIT verifiable experience system.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.local.example .env.local
# Edit .env.local: set NEXT_PUBLIC_API_URL=http://localhost:5000

# 3. Make sure backend (LEDGIT-Server) is running on :5000

# 4. Start dev server
npm run dev
```

App runs at http://localhost:3000

---

## Routes

| Route | Auth | Description |
|---|---|---|
| `/` | Public | Landing page with SVG animations |
| `/apply` | Auto | Email login → submit experience |
| `/auth/verify?token=` | None | Magic link callback |
| `/experiences` | Required | All experiences list |
| `/status/[id]` | Required | Experience detail + blockchain proof |
| `/verify/[id]` | None | Public credential verification + QR |

---

## Project Structure

```
app/
  page.tsx              ← Landing (LandingHero + LandingHowItWorks + ...)
  apply/page.tsx        ← Auth + experience submission
  auth/verify/page.tsx  ← Magic link callback
  experiences/page.tsx  ← Experience list
  status/[id]/page.tsx  ← Detail + timeline + blockchain proof
  verify/[id]/page.tsx  ← Public verification + QR code
  components/
    LandingHero.tsx
    LandingHowItWorks.tsx
    LandingFeatures.tsx
    LandingTrustSection.tsx
    LandingCTA.tsx
    Footer.tsx

lib/api/
  client.ts       ← Axios + auth interceptor
  auth.ts         ← Magic link API + token helpers
  experiences.ts  ← Experience CRUD
  verification.ts ← Public verification
  ai.ts           ← OCR endpoint

hooks/
  useAuth.ts        ← login / verifyLink / logout
  useExperiences.ts ← fetchList / fetchOne / create / runOcr

types/
  api.types.ts      ← All TypeScript interfaces
```

---

## Auth Flow

1. User enters email on `/apply`
2. Backend sends magic link → `FRONTEND_URL/auth/verify?token=JWT`
3. `/auth/verify` page calls `POST /auth/verify` → stores `ledgit_token` in localStorage
4. Axios interceptor attaches `Authorization: Bearer TOKEN` to all requests
5. 401 responses redirect to `/apply`

---

## Dependencies Added

- `axios` — API client
- `react-hook-form` + `zod` + `@hookform/resolvers` — form validation
- `qrcode.react` — QR generation on verify page
- `sonner` — toast notifications
- `framer-motion` — (available, use as needed)
- `lucide-react` — (available, use as needed)
