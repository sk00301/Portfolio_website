"use client"

import { RevealSection, RevealItem } from "./motion"

export function AboutSection() {
  return (
    <section id="about" aria-label="About">
      <RevealSection>
        <RevealItem>
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">About me</span>
          </div>
        </RevealItem>

        <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
          <RevealItem>
            <p>
              I&apos;m a Computer Science(with specialization in Data Science) graduate from{" "}
              <span className="text-foreground font-semibold">Manipal University Jaipur</span>,
              with hands-on experience in full-stack development and AI research. My work sits at
              the intersection of software engineering and data building tools that help people
              understand and collaborate better.
            </p>
          </RevealItem>

          <RevealItem>
            <p>
              Most recently, I&apos;ve been working as an{" "}
              <span className="text-foreground font-semibold">
                Data Analytics Intern at Azurean Investment Managers
              </span>
              , where I developed an interactive financial analytics dashboard with Streamlit and Python, implementing NSE stock screening, 
              Index analysis, and TradingView-style candlestick chart visualizations using Plotly and yfinance.
            </p>
          </RevealItem>

          <RevealItem>
            <p>
              When I&apos;m not coding, I explore AI research papers, automation pipelines, 
              open-source and game mods. One of my mods was briefly Featured in the Trending page of {" "}
              <a 
                href="https://videogamemods.com/the-citadel/dragon-ball-xenoverse-2/mods/real-super-saiyan-multilpiers"
                className="text-foreground font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Videogamemods.com
              </a>
              .
            </p>
          </RevealItem>
{/*
          <RevealItem>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: "2+",   label: "Years Experience" },
                { value: "8", label: "Projects" },
                { value: "2",  label: "Open source contributions" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 rounded-xl border border-border bg-card p-4 text-center"
                >
                  <span className="text-2xl font-extrabold text-primary">{value}</span>
                  <span className="text-xs text-muted-foreground leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </RevealItem>
*/}
        </div>
      </RevealSection>
    </section>
  )
}
