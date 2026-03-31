"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { Nav } from "./nav"
import { TypedRoles } from "./typed-roles"
import { fadeUp, slideLeft } from "./motion"

const CLOUDINARY_RESUME_URL =
  "https://res.cloudinary.com/daq0apwd0/image/upload/v1774939496/Suryansh_Resume.pdf"


const socialLinks = [
  { label: "GitHub",   href: "https://github.com/sk00301",      icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/suryanshkansara/", icon: Linkedin },
  { label: "Email",    href: "mailto:suryanshkansara4052@gmail.com",            icon: Mail },
]

export function Sidebar() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[42%] lg:flex-col lg:justify-between lg:py-24 px-0 pt-20 pb-10 lg:pb-0">
      <div>
        <motion.p
          variants={slideLeft}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-3 text-sm font-medium tracking-widest uppercase text-primary"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="text-5xl font-extrabold tracking-tight text-foreground text-balance leading-tight"
        >
          Suryansh Kansara
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="mt-3 text-xl font-medium"
        >
          <TypedRoles />
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground"
        >
          Data scientist & ML engineer passionate about AI, open-source, and shipping 
          things people actually use from transformer-based stock models to deep learning 
          security systems.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="mt-7"
        >
          <a
            href={CLOUDINARY_RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
          >
            <FileText size={15} />
            Download Resume
          </a>
        </motion.div>

        <Nav />
      </div>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-12 flex items-center gap-5 lg:mt-0"
        aria-label="Social links"
      >
        {socialLinks.map(({ label, href, icon: Icon }, i) => (
          <motion.li
            key={label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 + i * 0.08, duration: 0.4 }}
          >
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            >
              <Icon size={18} />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </header>
  )
}
