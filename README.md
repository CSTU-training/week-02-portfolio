# Telliex Chiu — Portfolio

Personal portfolio site built with Next.js App Router, React 19, and Tailwind CSS v4.

## Pages

| Route | Description |
| --- | --- |
| `/` | Hero section with intro and CTA links |
| `/about` | Bio, work experience timeline, grouped skills, education |
| `/projects` | Filterable project cards by technology tag |

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4 (CSS-first config via `globals.css`)
- **Font** — Geist Sans / Geist Mono via `next/font/google`

## Project Structure

```text
app/
  layout.tsx        # Root layout — nav, footer, font setup
  page.tsx          # Homepage (/)
  about/
    page.tsx        # About page (/about)
  projects/
    page.tsx        # Projects page with tag filter (/projects)
components/
  ProjectCard.tsx   # Reusable project card component
public/             # Static assets
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```
