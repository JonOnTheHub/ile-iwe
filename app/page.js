"use client";

import CourseCard from "@/components/courses/CourseCard";
import Button from "@/components/ui/button";
import Link from "next/link";
import courses from "@/data/courses";
import StatCard from "@/components/ui/StatCard";
import React from "react";

const Home = () => {
  const featured = courses.filter((course) => [1, 5, 11].includes(course.id));

  const stats = [
    { value: "20+", label: "Courses" },
    { value: "5", label: "Instructors" },
    { value: "8", label: "Categories" },
    { value: "100%", label: "Project-based" },
  ];

  const categories = [
    { name: "Web Development", emoji: "🌐" },
    { name: "Data Science", emoji: "📊" },
    { name: "Design", emoji: "✏️" },
    { name: "Backend Development", emoji: "⚙️" },
    { name: "Cybersecurity", emoji: "🔒" },
    { name: "DevOps", emoji: "🚀" },
    { name: "Mobile Development", emoji: "📱" },
    { name: "AI & Machine Learning", emoji: "🤖" },
  ];

  const steps = [
    {
      number: "01",
      title: "Pick a track",
      description:
        "Browse courses across 8 categories. Filter by what you actually want to build.",
    },
    {
      number: "02",
      title: "Learn by doing",
      description:
        "Every course is built around projects. No passive watching — you ship things.",
    },
    {
      number: "03",
      title: "Earn your cert",
      description:
        "Complete a track and get a certificate worth putting on your portfolio.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Île-Ìwé is the first platform that made me feel like I was actually building, not just following along.",
      name: "Jon O.",
      role: "Backend Developer",
    },
    {
      quote:
        "Finished the Product Design track in 3 weeks. Got a job offer two months later. The projects made the difference.",
      name: "Nabil A.",
      role: "Product Designer",
    },
    {
      quote:
        "The design of the platform alone made me trust the quality of the content. Knew it was serious from the start.",
      name: "Dayo S.",
      role: "Frontend Developer",
    },
  ];
  return (
    <>
      {/* keyframes injected once, really could've done it in globals but eh */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up {
          opacity: 0;
          animation: fadeUp 300ms ease-out forwards;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 py-10 space-y-24">
        {/* ── Hero ── */}
        <section
          className="fade-up relative overflow-hidden rounded-3xl border border-bg-border p-8 sm:p-12 md:p-20 min-h-130 flex items-center delay-0"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                background: `
          radial-gradient(ellipse at 85% 40%, rgba(157,23,77,0.18) 0%, transparent 55%),
          radial-gradient(ellipse at 15% 85%, rgba(212,168,67,0.15) 0%, transparent 45%),
          radial-gradient(ellipse at 50% 0%, rgba(107,16,57,0.12) 0%, transparent 50%)
        `,
              }}
            />
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <line
                x1="65%"
                y1="0"
                x2="100%"
                y2="45%"
                stroke="rgba(157,23,77,0.12)"
                strokeWidth="1"
              />
              <line
                x1="70%"
                y1="0"
                x2="100%"
                y2="38%"
                stroke="rgba(157,23,77,0.06)"
                strokeWidth="1"
              />
              <polyline
                points="0,75% 4%,75% 4%,100%"
                stroke="rgba(212,168,67,0.15)"
                strokeWidth="1"
                fill="none"
              />
              <line
                x1="0"
                y1="92%"
                x2="30%"
                y2="92%"
                stroke="rgba(157,23,77,0.08)"
                strokeWidth="1"
              />
            </svg>
          </div>

          <div className="relative z-10 w-full max-w-3xl">
            {/* eyebrow — hides on small screens */}
            <div className="hidden sm:inline-flex items-center gap-2 mb-6">
              <div
                className="h-px w-8 bg-purple-vivid"
              />
              <span className="font-dm-mono text-[11px] tracking-[0.2em] uppercase text-text-muted">
                Accelerate Your Skills
              </span>
            </div>

            {/* heading — centered on mobile, left on md+ */}
            <h1 className="font-syne font-extrabold leading-[1.02] tracking-[-0.025em] text-center sm:text-left mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Build faster. <br />
              Ship with
              <span
                className="relative inline-block text-gold"
              >
                confidence.
              </span>
            </h1>

            {/* Subtext — centered on mobile, left on sm+ */}
            <p className="text-base text-text-secondary font-light mb-10 max-w-md leading-relaxed text-center sm:text-left mx-auto sm:mx-0">
              Learn on-demand tech skills through projects that actually
              challenge you. No hand-holding — just craft.
            </p>

            {/* Buttons — space-around on mobile, left-aligned row on sm+ */}
            <div className="flex justify-around sm:justify-start sm:flex-wrap gap-3">
              <Button href="/courses" variant="primary" withIcon={true}>
                Browse Courses
              </Button>
              <Button href="/courses" variant="ghost" withIcon={false}>
                Learn More
              </Button>
            </div>
          </div>

          {/* Ghost wordmark — big screens only */}
          <div
            className="absolute right-0 bottom-0 font-syne font-extrabold leading-none select-none pointer-events-none hidden lg:block"
            style={{
              fontSize: "220px",
              color: "transparent",
              WebkitTextStroke: "1px rgba(157,23,77,0.1)",
              letterSpacing: "-0.04em",
            }}
            aria-hidden="true"
          >
            Ìwé
          </div>
        </section>

        {/* ── Stats ── */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className="fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <StatCard value={value} label={label} />
              </div>
            ))}
          </div>
        </section>

        {/* ── Categories ── */}
        <section>
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="h-px w-6 bg-purple-vivid"
                />
                <span className="font-dm-mono text-[11px] tracking-[0.2em] uppercase text-text-muted">
                  Tracks
                </span>
              </div>
              <h2 className="font-syne font-extrabold text-3xl text-text-primary tracking-[-0.015em]">
                Browse by category
              </h2>
            </div>
            <p className="text-text-muted text-sm font-dm-mono hidden md:block">
              8 tracks available
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {categories.map(({ name, emoji }, i) => (
              <Link
                key={name}
                href={`/courses?category=${encodeURIComponent(name)}`}
                className="fade-up group relative flex items-center gap-3 rounded-xl border border-bg-border bg-bg-raised px-4 py-4 overflow-hidden"
                style={{
                  animationDelay: `${i * 60}ms`,
                  transition:
                    "border-color 200ms ease-out, background-color 200ms ease-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "var(--color-purple-border)";
                  e.currentTarget.style.backgroundColor =
                    "var(--color-bg-surface)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-bg-border)";
                  e.currentTarget.style.backgroundColor =
                    "var(--color-bg-raised)";
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 0% 50%, rgba(157,23,77,0.08) 0%, transparent 70%)",
                    transition: "opacity 200ms ease-out",
                  }}
                />
                <span className="text-lg relative z-10" aria-hidden="true">
                  {emoji}
                </span>
                <span className="font-dm-sans text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-100 relative z-10">
                  {name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Featured Courses ── */}
        <section>
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="h-px w-6 bg-gold-dim"
                />
                <span className="font-dm-mono text-[11px] tracking-[0.2em] uppercase text-text-muted">
                  Featured
                </span>
              </div>
              <h2 className="font-syne font-extrabold text-3xl text-text-primary tracking-[-0.015em]">
                Start here
              </h2>
            </div>
            <Button href="/courses" variant="ghost" withIcon={true}>
              Browse all
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((course, i) => (
              <div
                key={course.id}
                className="fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </section>

        {/* ── How it works ── */}
        <section>
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="h-px w-6 bg-purple-vivid"
              />
              <span className="font-dm-mono text-[11px] tracking-[0.2em] uppercase text-text-muted">
                Process
              </span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl text-text-primary tracking-[-0.015em]">
              How it works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map(({ number, title, description }, i) => (
              <div
                key={number}
                className="fade-up relative rounded-2xl border border-bg-border bg-bg-raised p-8 overflow-hidden"
                style={{
                  animationDelay: `${i * 60}ms`,
                  transition:
                    "border-color 200ms ease-out, transform 200ms ease-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "var(--color-purple-border)";
                  e.currentTarget.style.transform = "scale(1.015)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-bg-border)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {i < 2 && (
                  <div
                    className="hidden md:block absolute top-12 -right-2 w-4 h-px z-10 bg-purple-border"
                  />
                )}
                <p
                  className="absolute top-4 right-6 font-syne font-extrabold select-none pointer-events-none leading-none"
                  style={{
                    fontSize: "80px",
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(157,23,77,0.15)",
                  }}
                  aria-hidden="true"
                >
                  {number}
                </p>
                <p
                  className="font-dm-mono text-[11px] tracking-[0.15em] mb-6 relative z-10 bg-purple-border"
                >
                  {number}
                </p>
                <h3 className="font-syne font-bold text-xl text-text-primary mb-3 relative z-10">
                  {title}
                </h3>
                <p className="text-sm text-text-secondary font-light leading-relaxed relative z-10">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="pb-10">
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="h-px w-6 bg-purple-vivid"
              />
              <span className="font-dm-mono text-[11px] tracking-[0.2em] uppercase text-text-muted">
                Learners
              </span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl text-text-primary tracking-[-0.015em]">
              What people say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map(({ quote, name, role }, i) => (
              <div
                key={name}
                className="fade-up relative rounded-2xl border border-bg-border bg-bg-raised p-8 flex flex-col justify-between gap-8 overflow-hidden"
                style={{
                  animationDelay: `${i * 60}ms`,
                  transition:
                    "border-color 200ms ease-out, transform 200ms ease-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "var(--color-purple-border)";
                  e.currentTarget.style.transform = "scale(1.015)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-bg-border)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <span
                  className="absolute top-4 right-6 font-syne font-extrabold leading-none select-none pointer-events-none text-[80px]"
                  style={{ color: "rgba(157,23,77,0.08)" }}
                  aria-hidden="true"
                >
                  &quot;
                </span>
                <p className="text-text-secondary text-sm font-light leading-relaxed relative z-10">
                  &quot;{quote}&quot;
                </p>
                <div className="flex items-center gap-3 relative z-10">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-syne font-bold text-xs shrink-0"
                    style={{
                      backgroundColor: "var(--color-purple-soft)",
                      border: "1px solid var(--color-purple-border)",
                      color: "#c4748e",
                    }}
                  >
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-syne font-semibold text-sm text-text-primary">
                      {name}
                    </p>
                    <p className="font-dm-mono text-[10px] text-text-muted tracking-[0.05em]">
                      {role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
