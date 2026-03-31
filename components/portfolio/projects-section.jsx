"use client"

import { motion } from "framer-motion"
import { Github, Star } from "lucide-react"
import { RevealSection, RevealItem } from "./motion"

const projects = [
  {
    name: "VittaLogic — Financial Reporting & Asset Management",
    period: "Apr 2025 — Jul 2025",
    description:
      "A full-stack financial management platform built for SMEs to automate reporting, track assets, and visualize real-time KPIs. Developed as part of the Deloitte Capstone Program, reaching the finalist round out of 300+ teams.",
    bullets: [
      "Engineered automated financial reporting system using the MERN stack with RESTful APIs for secure multi-source data integration",
      "Architected MongoDB database to efficiently manage and query financial records across assets, invoices, and transactions",
      "Built interactive Power BI dashboards delivering real-time KPIs and financial insights to business stakeholders",
      "Automated asset lifecycle tracking across acquisition, utilization, and disposal stages, reducing manual operational overhead",
    ],
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Power BI", "REST APIs"],
    github: "https://github.com/sk00301/VittaLogic",
    featured: true,
  },
  {
  name: "Blood Group Prediction",
  period: "2024",
  description:
    "A deep learning model to predict blood groups from fingerprint images using CNN-based image classification.",
  bullets: [
    "Built and trained a CNN model on fingerprint image dataset to classify 8 blood group categories",
    "Developed end-to-end preprocessing pipeline including image normalization, augmentation, and feature extraction",
    "Saved and managed model checkpoints to enable reproducibility and iterative training improvement",
    "Evaluated model performance using accuracy, precision, recall, and F1-score metrics",
  ],
  tags: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV", "Scikit-learn", "Pandas", "NumPy"],
  github: "https://github.com/sk00301/BloodGroup-Prediction",
  },
  {
    name: "Intrusion Detection System",
    period: "Nov 2024",
    description:
      "Developed a deep learning IDS on CICIDS 2017 dataset, classifying 15+ network attack categories.",
    bullets: [
      "Trained CNN, FNN, and LSTM models achieving accuracies of 99.22%, 99.05%, and 98.36%",
      "Built end-to-end preprocessing pipeline with normalization, label encoding, and feature selection",
      "Optimized performance via hyperparameter tuning, dropout regularization, and batch normalization",
      "Evaluated models using precision, recall, F1-score, and confusion matrix for cybersecurity validation",
    ],
    tags: ["Python", "TensorFlow", "Keras", "CNN", "LSTM", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/sk00301/IDS",
  },
  {
    name: "Unsupervised Machine Learning Trading Algorithm",
    period: "APR 2024",
    description:
      " Built unsupervised trading algorithm using K-means clustering and PCA on financial time-series data.",
    bullets: [
      "Implemented market regime detection and anomaly identification to optimize trading strategies",
      "Generated trend reversal signals using statistical pattern recognition on NSEI market data",
      "Outperformed NSEI Buy&Hold benchmark with higher cumulative returns and lower max drawdown",
    ],
    tags: ["Python", "Scikit-learn", "K-Means", "PCA", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/sk00301/MLTradingAlgo",
  },

]

export function ProjectsSection() {
  return (
    <section id="projects" aria-label="Projects">
      <RevealSection>
        <RevealItem>
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Projects</span>
          </div>
        </RevealItem>

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <RevealItem key={project.name}>
              <motion.div
                className="group relative rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-xl hover:shadow-black/20 backdrop-blur-sm"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {project.featured && (
                  <span className="absolute top-4 right-4 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                    Featured
                  </span>
                )}

                <div className="flex items-start justify-between gap-4 pr-16">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                        {project.name}
                      </h3>
                      {project.stars && (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Star size={11} className="fill-current text-yellow-500" />
                          {project.stars}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-[11px] font-medium text-muted-foreground/60 uppercase tracking-wider">
                      {project.period}
                    </p>
                    <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <ul className="mt-3 space-y-1.5">
                      {project.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub repo for ${project.name}`}
                      className="flex items-center gap-1.5 shrink-0 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-primary"
                    >
                      <Github size={13} />
                      Source
                    </a>
                  )}
                </div>
              </motion.div>
            </RevealItem>
          ))}
        </div>
      </RevealSection>
    </section>
  )
}
