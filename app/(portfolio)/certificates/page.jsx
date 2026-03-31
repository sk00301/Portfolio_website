import { PageTransition } from "@/components/portfolio/page-transition"
import { CertificatesSection } from "@/components/portfolio/certificates-section"

export const metadata = { title: "Certificates - Suryansh Kansara" }

export default function CertificatesPage() {
  return (
    <PageTransition>
      <CertificatesSection />
    </PageTransition>
  )
}
