# KSS — Issues & Vulnerability Tracker

## 🔴 Critical (Fix First)

### [C-1] Duplicate Script Tag — `index.html`
- **File:** `index.html` (line ~63-64)
- **Problem:** `<script type="module" src="/src/index.tsx">` appears TWICE
- **Impact:** App mounts twice, doubles API calls, breaks React state
- **Fix:** Remove the second/duplicate script tag

---

### [C-2] Tailwind CDN in Production — `index.html`
- **File:** `index.html`
- **Problem:** `<script src="https://cdn.tailwindcss.com">` loads full Tailwind runtime
- **Impact:** ~300KB overhead, styles not purged, slow performance
- **Fix:** 
  - Install: `npm install -D tailwindcss postcss autoprefixer`
  - Run: `npx tailwindcss init -p`
  - Remove CDN script tag from `index.html`
  - Add `@tailwind` directives to CSS

---

### [C-3] No CSRF / Spam Protection on Contact Form
- **File:** `src/components/sections/ContactSection.tsx`
- **Problem:** Form posts directly to FormSubmit with no honeypot or CAPTCHA
- **Impact:** Client's email inbox can be spammed by bots
- **Fix:** Add hidden honeypot field + enable FormSubmit captcha

---

## 🟠 Security Vulnerabilities

### [S-1] No HTTP Security Headers — `vercel.json`
- **File:** `vercel.json`
- **Problem:** Only has rewrite rules, zero security headers
- **Impact:** Site vulnerable to clickjacking, XSS, MIME sniffing
- **Headers to Add:**
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `X-XSS-Protection: 1; mode=block`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

---

### [S-2] Phone & Email Hardcoded in Public Repo
- **Files:** `src/components/WhatsAppWidget.tsx`, `src/components/sections/ContactSection.tsx`
- **Problem:** Phone `919810021487` and email `sales@kanhasecurity.in` exposed in public GitHub
- **Impact:** Bot scraping risk — especially ironic for a security company
- **Fix:** Move to `.env` variables (`VITE_PHONE_NUMBER`, `VITE_CONTACT_EMAIL`)

---

### [S-3] External CDN importmap in `index.html`
- **File:** `index.html`
- **Problem:** importmap loads React from `https://esm.sh` — redundant with Vite bundling
- **Impact:** Supply chain attack risk + extra network dependency
- **Fix:** Remove entire `<script type="importmap">` block (Vite handles all imports)

---

## 🟡 Performance & Code Quality

### [P-1] Missing SEO Meta Tags — `index.html`
- **File:** `index.html`
- **Problem:** No `description`, `og:title`, `og:image`, `twitter:card` meta tags
- **Impact:** Poor Google ranking, no social media preview cards
- **Fix:** Add full meta tag set in `<head>`

---

### [P-2] HashRouter Instead of BrowserRouter — `App.tsx`
- **File:** `src/App.tsx`
- **Problem:** `HashRouter` creates URLs like `kanhasecurity.in/#/about`
- **Impact:** Looks unprofessional, bad for SEO (Google ignores `#` fragments)
- **Fix:** Switch to `BrowserRouter` — `vercel.json` rewrites already support it

---

### [P-3] Blog Data Hardcoded in Component
- **File:** `src/components/sections/BlogSection.tsx`
- **Problem:** Blog array hardcoded inside component
- **Impact:** Unmaintainable as content grows
- **Fix:** Move to `src/constants/blogs.ts`

---

### [P-4] No maxLength on Form Inputs
- **File:** `src/components/sections/ContactSection.tsx`
- **Problem:** No input length limits
- **Impact:** Abuse vector, potential large payload submissions
- **Fix:** Add `maxLength={100}` to name/email, `maxLength={1000}` to message

---

### [P-5] No Real 404 Page
- **File:** `src/App.tsx`
- **Problem:** Catch-all route redirects to `/` instead of a proper 404
- **Impact:** Bad UX, confuses users on wrong URLs
- **Fix:** Create `src/pages/NotFoundPage.tsx` and link catch-all to it

---

## ✅ Already Correct (Do Not Change)
- `rel="noopener noreferrer"` on WhatsApp external link ✅
- `<html lang="en">` set correctly ✅
- TypeScript strict mode in `tsconfig.json` ✅
- Vercel rewrites for SPA routing ✅
- `aria-label` on WhatsApp widget button ✅