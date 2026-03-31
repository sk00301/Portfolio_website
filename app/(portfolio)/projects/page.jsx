import { PageTransition } from "@/components/portfolio/page-transition"
import { ProjectsSection } from "@/components/portfolio/projects-section"

export const metadata = { title: "Projects - Suryansh Kansara" }

export default function ProjectsPage() {
  return (
    <PageTransition>
      <ProjectsSection />
    </PageTransition>
  )
}
