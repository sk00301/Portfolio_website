import { PageTransition } from "@/components/portfolio/page-transition"
import { SkillsSection } from "@/components/portfolio/skills-section"

export const metadata = { title: "Skills - Suryansh Kansara" }

export default function SkillsPage() {
  return (
    <PageTransition>
      <SkillsSection />
    </PageTransition>
  )
}
