import CourseCard from "@/components/courses/CourseCard";
import Button from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import courses from "@/data/courses";

const Home = () => {
  const featured = courses.filter((course) => [1, 5, 18].includes(course.id));

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
    <div className="mx-auto max-w-7xl px-4 py-10 space-y-12">
      {/* ── hero ── */}
      <section className="relative overflow-hidden rounded-3xl border border-bg-border p-16">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 80% 50%, rgba(157,23,77,0.15) 0%, transparent 60%),
              radial-gradient(ellipse at 20% 80%, rgba(212,168,67,0.20) 0%, transparent 50%)
            `,
          }}
        />
        <div className="relative z-10">
          <h1 className="font-syne font-extrabold leading-tight text-center md:text-left mb-4 text-4xl sm:text-5xl md:text-6xl max-w-3xl">
            Build faster. <br />
            Ship <span className="text-gold">with confidence.</span>
          </h1>
          <p className="text-base text-text-secondary font-light mb-8 max-w-md text-center md:text-left">
            Learn on-demand tech skills through projects that actually challenge
            you. No hand-holding — just craft.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <Button href="/courses" variant="primary" withIcon={true}>
              Browse Courses
            </Button>
            <Button href="/courses" variant="ghost" withIcon={false}>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* ── stats ── */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-xl border border-bg-border bg-bg-raised p-6"
            >
              <p className="font-syne font-extrabold text-4xl text-text-primary mb-1">
                {value}
              </p>
              <p className="font-dm-mono text-[11px] text-text-muted uppercase tracking-[0.15em]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── categories ── */}
      <section>
        <h2 className="font-syne font-bold text-2xl text-text-primary mb-2">
          Browse by category
        </h2>
        <p className="text-text-secondary text-sm mb-8">
          Eight tracks. Pick the one that fits where you&apos;re going.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {categories.map(({ name, emoji }) => (
            <Link
              key={name}
              href={`/courses?category=${encodeURIComponent(name)}`}
              className="group flex items-center gap-3 rounded-xl border border-bg-border bg-bg-raised px-4 py-4 transition-colors hover:border-purple-border hover:bg-bg-surface"
            >
              <span className="text-xl" aria-hidden="true">
                {emoji}
              </span>
              <span className="font-dm-sans text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                {name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── featured courses ── */}
      <section>
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-syne font-bold text-2xl text-text-primary mb-2">
              Featured courses
            </h2>
            <p className="text-text-secondary text-sm">
              Handpicked to get you moving fast.
            </p>
          </div>
          <Button href="/courses" variant="ghost" withIcon={true}>
            Browse all
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* ── how it works ── */}
      <section>
        <h2 className="font-syne font-bold text-2xl text-text-primary mb-2">
          How it works
        </h2>
        <p className="text-text-secondary text-sm mb-12">
          Three steps. No fluff.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ number, title, description }) => (
            <div
              key={number}
              className="relative rounded-xl border border-bg-border bg-bg-raised p-8"
            >
              <p
                className="font-syne font-extrabold text-6xl mb-6 select-none"
                style={{ color: "var(--color-purple-soft)" }}
                aria-hidden="true"
              >
                {number}
              </p>
              <h3 className="font-syne font-bold text-lg text-text-primary mb-2">
                {title}
              </h3>
              <p className="text-sm text-text-secondary font-light leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── testimonials ── */}
      <section className="pb-10">
        <h2 className="font-syne font-bold text-2xl text-text-primary mb-2">
          What learners say
        </h2>
        <p className="text-text-secondary text-sm mb-12">
          Real people. Real progress.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role }) => (
            <div
              key={name}
              className="rounded-xl border border-bg-border bg-bg-raised p-8 flex flex-col justify-between gap-6"
            >
              <p className="text-text-secondary text-sm font-light leading-relaxed">
                &quot;{quote}&quot;
              </p>
              <div>
                <p className="font-syne font-semibold text-sm text-text-primary">
                  {name}
                </p>
                <p className="font-dm-mono text-[10px] text-text-muted tracking-[0.05em] mt-0.5">
                  {role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
