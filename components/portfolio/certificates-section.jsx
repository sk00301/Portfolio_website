"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, BadgeCheck } from "lucide-react"
import { RevealSection, RevealItem } from "./motion"

const certificates = [
  {
    title: "Bachelor of Technology in Computer Science(Data Science)",
    issuer: "Manipal University Jaipur",
    period: "Aug 2022 — June 2026",
    description: "Focused on software engineering, AI & ML, Data Science, and Data structures. Jaipur, Rajasthan.",
    type: "degree",
  },
  { title: "Power BI Fundamentals", 
    issuer: "Corporate Finance Institute · Coursera", 
    period: "Apr 2025", 
    type: "certificate" 
  },
  { title: "Introduction to Big Data with Spark and Hadoop", 
    issuer: "IBM · Coursera", 
    period: "Feb 2025", 
    type: "certificate" 
  },
  { title: "Introduction to Operating Systems", 
    issuer: "IIT Madras · NPTEL", 
    period: "Oct 2024", 
    type: "certificate" 
  },
  { title: "Introduction to Machine Learning with Python", 
    issuer: "Arizona State University · Coursera", 
    period: "Apr 2024", 
    type: "certificate" 
  },
  { title: "Ordered Data Structures", 
    issuer: "University of Illinois Urbana-Champaign · Coursera", 
    period: "Nov 2023", 
    type: "certificate" 
  },
]

export function CertificatesSection() {
  return (
    <section id="certificates" aria-label="Education & Certificates">
      <RevealSection>
        <RevealItem>
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Education &amp; Achievements</span>
          </div>
        </RevealItem>

        <div className="grid gap-4 sm:grid-cols-2">
          {certificates.map((cert) => (
            <RevealItem key={cert.title}>
              <motion.div
                className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-card/50 p-5 h-full transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-xl hover:shadow-black/20 backdrop-blur-sm"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-colors group-hover:bg-primary/20"
                    aria-hidden="true"
                  >
                    {cert.type === "degree" ? (
                      <GraduationCap size={20} className="text-primary" />
                    ) : (
                      <Award size={20} className="text-primary" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <span className="text-[10px] font-bold text-muted-foreground whitespace-nowrap bg-secondary px-2.5 py-1 rounded-full">
                      {cert.period}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-primary/70">{cert.issuer}</p>
                  <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">{cert.description}</p>
                </div>

                <span className="self-start rounded-full border border-border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {cert.type === "degree" ? "Education" : "Certificate"}
                </span>
              </motion.div>
            </RevealItem>
          ))}
        </div>
      </RevealSection>
    </section>
  )
}
