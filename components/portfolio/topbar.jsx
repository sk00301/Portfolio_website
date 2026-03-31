"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"

const navItems = [
  { href: "/",             label: "About" },
  { href: "/experience",   label: "Experience" },
  { href: "/projects",     label: "Projects" },
  { href: "/skills",       label: "Skills" },
  { href: "/certificates", label: "Certificates" },
]

const socialLinks = [
  { href: "https://github.com/sk00301", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/suryanshkansara/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:suryanshkansara4052@gmail.com", icon: Mail, label: "Email" },
]

export function Topbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 flex h-16 items-center justify-between px-6 lg:px-12 border-b border-border/40 backdrop-blur-lg"
        style={{ background: "oklch(0.07 0.012 28 / 0.85)" }}
      >
        {/* Logo / name — coder style */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Suryansh Kansara — home">
          <span
            aria-hidden="true"
            className="relative flex h-7 w-7 items-center justify-center rounded-md font-mono text-[11px] font-black text-primary border border-primary/40"
            style={{
              background: "oklch(0.12 0.04 28)",
              boxShadow: "0 0 10px 2px oklch(0.83 0.19 68 / 0.3)",
            }}
          >
            {"</>"}
          </span>
          <span className="text-base font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors font-mono">
            sk.dev
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                  active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    style={{ boxShadow: "0 0 14px 2px oklch(0.83 0.19 68 / 0.45)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 36 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Social + mobile toggle */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <button
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={18} />
                </motion.span>
              ) : (
                <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 inset-x-0 z-40 border-b border-border/40 backdrop-blur-lg px-6 py-4 flex flex-col gap-1 md:hidden"
            style={{ background: "oklch(0.07 0.012 28 / 0.95)" }}
          >
            {navItems.map(({ href, label }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
