"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "This site — built with Next.js App Router and Tailwind CSS. Covers routing, layouts, and client-side interactivity.",
    tags: ["Next.js", "TypeScript"],
  },
  {
    id: 2,
    title: "Multi-tenant SaaS Admin Panel",
    description:
      "Role-based admin dashboard for a multi-tenant SaaS platform. Per-org access control, audit logs, and a settings system built with Vue and Nuxt.",
    tags: ["Nuxt", "TypeScript"],
  },
  {
    id: 3,
    title: "Real-time Chat App",
    description:
      "WebSocket-powered group chat with typing indicators, message history, and room management. Frontend in React, backend in Node.js.",
    tags: ["React", "Node.js"],
  },
  {
    id: 4,
    title: "E-commerce Storefront",
    description:
      "SSR product catalog with cart, checkout flow, and Stripe payment integration. Built on Nuxt with server-side rendering for SEO.",
    tags: ["Nuxt", "TypeScript"],
  },
  {
    id: 5,
    title: "RAG Document Q&A",
    description:
      "Upload PDFs and ask natural language questions. Uses text chunking, Pinecone vector search, and an LLM to return grounded answers.",
    tags: ["Python", "AI"],
  },
  {
    id: 6,
    title: "REST API with NestJS",
    description:
      "Modular REST API with JWT authentication, role-based guards, and PostgreSQL via TypeORM. Containerized with Docker and deployed via CI/CD.",
    tags: ["Node.js", "TypeScript"],
  },
  {
    id: 7,
    title: "Cloud File Manager",
    description:
      "S3-backed file manager with drag-and-drop upload, folder structure, image preview, and signed URL downloads. Deployed on AWS with CloudFront CDN.",
    tags: ["React", "AWS"],
  },
  {
    id: 8,
    title: "Vue Component Library",
    description:
      "A design system of reusable Vue 3 components — buttons, modals, forms, and data tables — with Storybook docs and Tailwind theming.",
    tags: ["Vue", "TypeScript"],
  },
  {
    id: 9,
    title: "AI Writing Assistant",
    description:
      "Browser-based writing tool that streams LLM completions via Vercel AI SDK. Supports tone adjustment, summarization, and multi-language output.",
    tags: ["Next.js", "AI"],
  },
  {
    id: 10,
    title: "CLI Task Manager",
    description:
      "Command-line tool for managing tasks stored in a local JSON file, with add, complete, delete, and priority-sort commands.",
    tags: ["Python"],
  },
];

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
        Projects
      </h1>
      <p className="mt-2 text-base text-zinc-500">
        A selection of work from coursework and personal exploration.
      </p>

      {/* Filter buttons */}
      <div className="mt-8 flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeTag === tag
                ? "bg-zinc-900 text-white"
                : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project cards */}
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {filtered.map((project) => (
          <li key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
