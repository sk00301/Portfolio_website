"use client"

import { motion } from "framer-motion"
import { RevealSection, RevealItem } from "./motion"

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "Java", "C", "R", "SQL", "HTML/CSS"],
  },
  {
    category: "ML / AI",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Neural Networks", "Time Series Analysis", "Transformers"],
  },
  {
    category: "Data",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"],
  },
  {
    category: "Frameworks & Tools",
    skills: ["React", "Node.js", "Express.js", "FastAPI", "REST APIs", "Git", "Docker"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Platforms",
    skills: ["Google Colab", "VS Code", "AWS", "CUDA", "OpenMP"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" aria-label="Technical Skills">
      <RevealSection>
        <RevealItem>
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Technical Skills</span>
          </div>
        </RevealItem>

        <div className="flex flex-col gap-8">
          {skillGroups.map((group, groupIdx) => (
            <RevealItem key={group.category}>
              <div>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground/70">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: groupIdx * 0.05 + skillIdx * 0.04,
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="cursor-default rounded-lg border border-border bg-secondary px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors duration-150 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </div>
      </RevealSection>
    </section>
  )
}
