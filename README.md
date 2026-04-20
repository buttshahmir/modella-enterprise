# Modella Enterprise — Steel Trading Website

A premium B2B steel trading website built with React + Vite + TailwindCSS v4 + Framer Motion.

## Quick Start

```bash
# 1. Install dependencies (run from the project root)
cd client
npm install

# 2. Start development server
npm run dev
# Opens at http://localhost:5173

# 3. Production build
npm run build
# Output goes to ../dist/public/
```

## Project Structure

```
modella-fixed/
├── client/               ← All frontend source code
│   ├── src/
│   │   ├── components/   ← Reusable UI components
│   │   ├── pages/        ← Route-level pages
│   │   ├── contexts/     ← React context providers
│   │   ├── hooks/        ← Custom React hooks
│   │   ├── lib/          ← Utilities
│   │   └── index.css     ← Global styles + Tailwind
│   ├── public/images/    ← Static assets (product photos)
│   ├── package.json      ← All dependencies
│   ├── vite.config.ts    ← Vite + Tailwind config
│   └── tsconfig.json     ← TypeScript config
├── shared/               ← Shared constants
├── dist/public/          ← Production build output
└── vercel.json           ← Deployment config
```

## Deployment (Vercel)

Connect your GitHub repo to Vercel. The `vercel.json` is pre-configured:
- Build command: `cd client && npm install && npm run build`
- Output directory: `dist/public`
- All routes rewrote to `index.html` for SPA routing

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** with HMR
- **Tailwind CSS v4** + `tw-animate-css`
- **Framer Motion** for animations
- **Swiper** for hero carousel
- **Wouter** for client-side routing
- **shadcn/ui** component library
