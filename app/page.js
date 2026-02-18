import Button from "@/components/ui/button";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <section className="relative overflow-hidden rounded-3xl border border-bg-border p-16 mb-3">

        {/* Background gradients */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 80% 50%, rgba(157,23,77,0.15) 0%, transparent 60%),
              radial-gradient(ellipse at 20% 80%, rgba(212,168,67,0.20) 0%, transparent 50%)
            `,
          }}
        />

        {/* Content — positioned above gradient */}
        <div className="relative z-10">
          <h1 className="font-syne font-extrabold leading-tight text-center md:text-left mb-4 text-4xl sm:text-5xl md:text-6xl max-w-3xl">
            Build faster. <br />
            Ship{" "}
            <span className="text-gold">with confidence.</span>
          </h1>

          <p className="text-base text-text-secondary font-light font-dm-sans mb-8 text-center max-w-md lg:text-left">
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
    </div>
  );
}