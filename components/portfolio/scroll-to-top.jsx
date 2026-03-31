"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-6 z-50 lg:bottom-6 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-lg transition-all duration-200 hover:border-primary/50 hover:text-primary hover:shadow-primary/10"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.92 }}
        >
          <ArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
