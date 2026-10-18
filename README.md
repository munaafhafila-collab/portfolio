# 🚀 Anisa Hafila — Premium Digital Marketing Portfolio

A world-class, modern, and responsive digital marketing portfolio website built for **Anisa Hafila**, an aspiring digital marketer and fresher. Inspired by modern digital product aesthetics (Linear, Apple, Stripe, Framer) with a sleek dark theme (`#0B1120`), aurora gradients, glassmorphism, interactive marketing dashboards, case studies, and full SEO optimization.

---

## 🌟 Highlights & Features

- **Design System**: Dark theme (`#0B1120`), indigo/violet/cyan aurora gradients (`#4F46E5`, `#7C3AED`, `#06B6D4`), glassmorphism cards (`rgba(255,255,255,0.05)`), Inter typography, and micro-interactions.
- **Sticky Glass Navbar**: Smooth section navigation, animated active pill indicator, responsive mobile menu drawer, and "Let's Connect" CTA.
- **Hero Section**:
  - Animated cycling titles (*Aspiring Digital Marketer*, *SEO Enthusiast*, *Social Media Marketer*, *Content Creator*, *Digital Growth Enthusiast*).
  - Exact bio: *"I help businesses grow online through strategic digital marketing, engaging content, search engine optimization, and data-driven campaigns that attract the right audience and drive meaningful results."*
  - Interactive **Digital Marketing Intelligence Dashboard** with live-simulated organic traffic curve, SEO rank tracker (+14 positions), social reach card (24.1K views), and 7-day content schedule.
  - One-click resume download with celebratory confetti animation.
- **About Section**: Honest fresher positioning highlighting self-directed learning, user intent understanding, and 6 core capability cards.
- **Skills Matrix**: Categorized across SEO, Social Media, Content Marketing, Advertising Concepts, and Analytics & AI Tools, clearly distinguishing *Practiced in Projects* from *Currently Learning*.
- **4 Practical Case Studies with Interactive Modals**:
  1. **Photo & Video Editing Blog Strategy** (Content Marketing & SEO)
  2. **SEO Website Optimization Audit** (On-Page SEO Checklist & Metadata Optimization)
  3. **Social Media Multi-Pillar Content Strategy** (Audience Persona, 4 Content Pillars, 7-Day Matrix)
  4. **Digital Advertising Campaign Concept** (Full-Funnel Blueprint, A/B Ad Copy Variations, KPI Roadmap)
- **Services (6 Entry-Level Offerings)**: Includes "Discuss a Project" action triggers that automatically scroll and prefill the contact form subject.
- **Tools Showcase**: 9 core tools (Canva, GA4, Search Console, Google Trends, Keyword Planner, Google Ads, Meta Ads Manager, WordPress, ChatGPT) with learning badges.
- **Learning Journey Timeline**: 5 milestones depicting Anisa's skill acquisition trajectory.
- **Contact Hub**: Fully validated contact form (`/api/contact`), direct email copy with feedback, LinkedIn CTA, and confetti feedback.
- **SEO & Performance**: OpenGraph tags, Twitter cards, XML sitemap (`/sitemap.xml`), robots directives (`/robots.txt`), and Schema.org JSON-LD structured data.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19, TypeScript
- **Styling**: Tailwind CSS v4, custom glassmorphism utilities
- **Icons**: Lucide React & custom brand vectors
- **Delight & Animations**: Framer Motion, Canvas Confetti
- **Document Generation**: `pdf-lib` (auto-generates `/public/resume.pdf`)

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ (tested with Node 20 / 24)
- `pnpm` (or `npm`)

### 2. Installation
```bash
# Clone the repository
git clone <repo-url>
cd "A2 creation wb"

# Install dependencies
pnpm install
```

### 3. Generate the Resume PDF (Optional / Pre-generated)
The repository includes a ready-to-use resume PDF at `public/resume.pdf`. To re-generate it with updated text or details:
```bash
node scripts/generate-resume.mjs
```

### 4. Running the Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build & Typecheck
```bash
# Verify TypeScript strict types
pnpm typecheck

# Build optimized production bundle
pnpm build

# Start production server
pnpm start
```

---

## 🎨 Customizing Details & Personalization

All personal details, case study data, services, and skills are organized inside [`lib/constants.ts`](./lib/constants.ts):

1. **LinkedIn Profile URL**:
   In `lib/constants.ts`, update `PERSONAL_INFO.linkedin`:
   ```ts
   linkedin: "https://www.linkedin.com/in/your-actual-profile",
   ```

2. **Email Address**:
   In `lib/constants.ts`, update `PERSONAL_INFO.email`.

3. **Projects & Images**:
   Project screenshots are located in [`public/images/projects/`](./public/images/projects/):
   - `blog-seo.jpg`
   - `seo-audit.jpg`
   - `social-strategy.jpg`
   - `ad-campaign.jpg`
   - `anisa-portrait.jpg`
   Replace these image files with custom screenshots at any time.

4. **Production Domain for Canonical URLs**:
   Set `NEXT_PUBLIC_SITE_URL` in `.env.local`:
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-custom-domain.com
   ```

---

## 🚢 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub / GitLab.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Set the environment variable `NEXT_PUBLIC_SITE_URL` to your production domain (e.g. `https://anisahafila.com`).
5. Click **Deploy**. Vercel will automatically build the Next.js App Router application with static page generation and serverless API routes.

---

## ✅ Quality & Testing Checklist

- [x] Strict TypeScript validation (`pnpm typecheck` passed with 0 errors)
- [x] Next.js production build (`pnpm build` passed with 0 errors)
- [x] Zero broken links or dead buttons
- [x] Exact required hero bio displayed
- [x] Working `/resume.pdf` download trigger
- [x] Fully accessible form validation with meaningful error states
- [x] Dynamic year in footer copyright notice
- [x] XML Sitemap (`/sitemap.xml`) and Robots (`/robots.txt`) configured
- [x] WCAG 2.2 AA contrast and focus rings implemented
- [x] Reduced motion media queries supported
