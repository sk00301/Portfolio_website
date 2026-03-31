"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { id: "about",        label: "About" },
  { id: "experience",   label: "Experience" },
  { id: "projects",     label: "Projects" },
  { id: "skills",       label: "Skills" },
  { id: "certificates", label: "Certificates" },
]

export function Nav() {
  const [active, setActive] = useState("about")
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 140
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id)
        if (el && el.offsetTop <= scrollY) {
          setActive(navItems[i].id)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  return (
    <>
      <nav className="mt-12 hidden lg:block" aria-label="In-page navigation">
        <ul className="flex flex-col gap-0.5">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`group flex items-center gap-4 py-2 transition-all duration-200 ${
                  active === id ? "text-foreground" : "text-nav-text hover:text-foreground"
                }`}
                aria-current={active === id ? "location" : undefined}
              >
                <motion.span
                  animate={{ width: active === id ? 56 : 28 }}
                  whileHover={{ width: 56 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={`h-px block ${active === id ? "bg-foreground" : "bg-muted-foreground"}`}
                />
                <span
                  className={`text-xs font-bold tracking-widest uppercase transition-colors ${
                    active === id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <motion.button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20"
          whileTap={{ scale: 0.92 }}
          aria-label="Toggle navigation"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-16 right-0 min-w-[160px] rounded-2xl border border-border bg-card p-2 shadow-xl shadow-black/30"
            >
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`block w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                    active === id
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
