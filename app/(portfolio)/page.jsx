import { PageTransition } from "@/components/portfolio/page-transition"
import { AboutSection } from "@/components/portfolio/about-section"
import { TypedRoles } from "@/components/portfolio/typed-roles"

const CLOUDINARY_RESUME_URL =
  "https://res.cloudinary.com/daq0apwd0/image/upload/v1774939496/Suryansh_Resume.pdf"

export default function HomePage() {
  return (
    <PageTransition>
      <section className="mb-16">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Hello, I&apos;m</p>
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground text-balance leading-tight lg:text-6xl">
          Suryansh Kansara
        </h1>
        <div className="mt-3 text-xl font-medium">
          <TypedRoles />
        </div>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Data scientist & ML engineer passionate about AI, open-source, and shipping 
          things people actually use from transformer-based stock models to deep learning 
          security systems.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={CLOUDINARY_RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-200 hover:shadow-primary/50 hover:scale-105"
          >
            Download Resume
          </a>
          <a
            href="mailto:suryanshkansara4052@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-bold text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-primary"
          >
            Get in Touch
          </a>
        </div>
      </section>
      <AboutSection />
    </PageTransition>
  )
}
