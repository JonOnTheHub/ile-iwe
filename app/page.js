import Button from "@/components/ui/button";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl py-10 px-4 bg-background">
      <section className=" relative overflow-hidden rounded-lg border border-border p-16 mb-3 col-span-full">
        {/* Background Gradients */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
            radial-gradient(ellipse at 80% 50%, rgba(157,23,77,0.15) 0%, transparent 60%),
            radial-gradient(ellipse at 20% 80%, rgba(212,168,67,0.20) 0%, transparent 50%);
          `,
          }}
        />

        {/* Heading */}
        <h1
          className=" font-syne font-extrabold leading-tight text-center md:text-left mb-3 
               text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[32px] 
               max-w-4xl"
        >
          Build faster. <br></br> Ship{" "}
          <span className="text-gold">with confidence.</span>
        </h1>

        {/* Subtext */}
        <p className=" text-md text-foreground/70 text-center md:text-left font-light font-dm-sans mb-7 max-w-md">
          Learn on-demand tech skills through projects that actually challenge you. No
          hand-holding — just craft.
        </p>

        {/* Actions */}
        <div className=" flex flex-wrap justify-around md:justify-start md:gap-3">
          <Button href="/courses">Enroll Now</Button>
          <Button href="/learn" variant="outline" withIcon={false}>
            Learn More
          </Button>
        </div>
      </section>
    </div>
  );
}
