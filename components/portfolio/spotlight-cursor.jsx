"use client"

import { useEffect, useRef } from "react"

export function SpotlightCursor() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e) => {
      el.style.setProperty("--mx", `${e.clientX}px`)
      el.style.setProperty("--my", `${e.clientY}px`)
    }
    window.addEventListener("mousemove", move, { passive: true })
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 transition-none"
      style={{
        background:
          "radial-gradient(700px circle at var(--mx, -9999px) var(--my, -9999px), oklch(0.83 0.19 68 / 0.09), transparent 80%)",
      }}
    />
  )
}
