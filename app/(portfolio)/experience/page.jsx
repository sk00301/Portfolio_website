import { PageTransition } from "@/components/portfolio/page-transition"
import { ExperienceSection } from "@/components/portfolio/experience-section"

export const metadata = { title: "Experience - Suryansh Kansara" }

export default function ExperiencePage() {
  return (
    <PageTransition>
      <ExperienceSection />
    </PageTransition>
  )
}
