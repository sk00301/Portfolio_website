"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { RevealSection, RevealItem } from "./motion"

const experiences = [
  {
    period: "Feb 2026 — Apr 2026",
    title: "Data Analytics Intern",
    company: "Azurean Investment Manages",
    location: "Jodhpur, Rajasthan",
    bullets: [
      "Built an interactive financial analytics dashboard using Streamlit and Python to analyze NSE stock market data",
      "Implemented technical analysis features including Fno Activity Tracking, High Frequency Macro Tracking, Index Analysis and Index ratio comparisons",
      "Developed TradingView-style candlestick chart visualizations using Plotly and yfinance with real-time data fetching",
      "Developed Automation pipeline for updating the Database on a periodic basis"
    ],
    tags: ["Python", "Streamlit", "Plotly", "yfinance", "Pandas"],
  },
  {
    period: "Apr 2025 — Jul 2025",
    title: "Deloitte Capstone Program",
    company: "Deloitte USI",
    location: "Remote",
    bullets: [
      "Finalist out of 300+ teams across various colleges and universities in the Deloitte Capstone Program",
      "Engineered a full-stack financial management platform using the MERN stack with RESTful APIs for secure multi-source data integration",
      "Architected MongoDB database and built interactive Power BI dashboards delivering real-time KPIs and financial insights for SMEs",
      "Automated asset lifecycle tracking across acquisition, utilization, and disposal stages, reducing manual overhead end-to-end",
    ],
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Power BI", "REST APIs"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" aria-label="Work Experience">
      <RevealSection>
        <RevealItem>
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Work Experience</span>
          </div>
        </RevealItem>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden sm:block" aria-hidden="true" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp) => (
              <RevealItem key={exp.title + exp.company}>
                <motion.div
                  className="group relative sm:pl-8"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute left-0 top-1.5 hidden sm:flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors duration-200" aria-hidden="true" />

                  <div className="rounded-2xl border border-border bg-card/50 p-5 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-xl hover:shadow-black/20 backdrop-blur-sm">
                    <span className="inline-block mb-3 rounded-full bg-primary/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                      {exp.period}
                    </span>

                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
                          {exp.title}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-muted-foreground">
                          {exp.company}
                          <span className="mx-1.5 opacity-40">·</span>
                          <span className="text-xs">{exp.location}</span>
                        </p>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="mt-1 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        aria-hidden="true"
                      />
                    </div>

                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </RevealItem>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  )
}
