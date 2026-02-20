# Île-Ìwé

An online tech skills learning platform built with Next.js. Project-based courses across categories — built to challenge, not hand-hold.

## Tech Stack

- **Next.js 15** — App Router
- **React 19**
- **Tailwind CSS v4** — token-based design system, no config file
- **shadcn/ui** — component foundation
- **Context API** — global state for wishlist and enrollment

## Design System

Dark mode first. Warm obsidian backbone, Tyrian purple accent, gold reserved for achievements only. Full token system lives in `app/globals.css`.

Fonts: Syne (display) · DM Sans (body) · DM Mono (code/metadata)

## Project Structure
```
ile-iwe/
├── app/
│   ├── courses/
│   │   └── [id]/
│   ├── wishlist/
│   ├── enrolled/
│   ├── layout.js
│   └── page.js
├── components/
│   ├── courses/
│   │   ├── CourseCard.jsx
│   │   └── CourseDetail.jsx
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   └── ui/
│       ├── button.jsx
│       ├── AchievementCard.jsx
│       ├── ModuleCard.jsx
│       └── StatCard.jsx
├── context/
│   └── AppContext.jsx
└── data/
    └── courses.js
```

## Getting Started
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Features

- Browse 20 courses across 8 categories
- Course detail pages with full metadata
- Enroll in courses and track them under My Learning
- Wishlist courses for later
- Responsive — mobile, tablet, desktop

## Status

Week 2 of 4 complete.