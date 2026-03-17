# Kanha Security System — Antigravity IDE Setup Guide

## Project Overview
- **Project Name:** Kanha Security System (KSS)
- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS (via CDN — to be fixed)
- **Routing:** React Router DOM v6 (HashRouter)
- **Deployment:** Vercel
- **Package Manager:** npm

## Tech Stack
| Layer | Technology |
|---|---|
| Frontend | React 19, TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS |
| Animation | Motion (Framer Motion v12) |
| Icons | Lucide React |
| Routing | React Router DOM v6 |
| Form Handling | FormSubmit.co |
| Deployment | Vercel |

## Project Structure
Kanha-Security-System/
├── public/ # Static assets (favicon, images)
├── src/
│ ├── components/
│ │ ├── sections/ # Page sections (Hero, Blog, Contact, etc.)
│ │ ├── Footer.tsx
│ │ ├── Hero.tsx
│ │ ├── Navbar.tsx
│ │ ├── ServiceCard.tsx
│ │ └── WhatsAppWidget.tsx
│ ├── constants/ # Static data/config
│ ├── pages/ # Full page components
│ ├── types/ # TypeScript type definitions
│ ├── App.tsx # Root component with routing
│ └── index.tsx # React entry point
├── index.html # HTML entry (Vite)
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json # Vercel deployment config
└── metadata.json

text

## Known Issues To Fix (Before Starting Development)
1. Duplicate `<script>` tag in `index.html`
2. Tailwind CSS loaded via CDN (should be PostCSS plugin)
3. No security headers in `vercel.json`
4. No spam protection on contact form
5. Missing SEO meta tags in `index.html`
6. HashRouter (URLs have `#`) — needs BrowserRouter
7. Blog data hardcoded in component
8. No rate limiting / CAPTCHA on contact form
9. External CDN importmap in `index.html` (redundant with Vite)
10. `motion` library may be over-bundled

## Pages Available
- `/` — Home Page
- `/about` — About Page
- `/services` — Services Page
- `/service/:id` — Service Detail Page
- `/partners` — Partners Page
- `/projects` — Projects Page
- `/contact` — Contact Page
- `/blogs` — Blog List Page
- `/blog/:slug` — Blog Post Page
- `/privacy-policy` — Privacy Policy
- `/terms-of-service` — Terms of Service
