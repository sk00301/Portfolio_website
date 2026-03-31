import { Topbar } from "@/components/portfolio/topbar"
import { SolarCursor, SpotlightCursor } from "@/components/portfolio/cursor"
import { ScrollToTop } from "@/components/portfolio/scroll-to-top"

const coronaStyle = {
  background:
    "radial-gradient(circle, oklch(0.83 0.19 68 / 0.16) 0%, oklch(0.74 0.21 48 / 0.07) 40%, transparent 70%)",
  filter: "blur(48px)",
}

export default function PortfolioLayout({ children }) {
  return (
    <>
      <SolarCursor />
      <SpotlightCursor />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-0 h-[640px] w-[640px] -translate-x-1/3 -translate-y-1/3 rounded-full"
        style={coronaStyle}
      />

      <Topbar />

      <main className="relative z-10 mx-auto min-h-screen max-w-4xl px-6 pt-28 pb-20 lg:px-12">
        {children}
      </main>

      <ScrollToTop />
    </>
  )
}
