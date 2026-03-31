"use client"

import { useEffect, useRef } from "react"

export function SolarCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = -100, my = -100
    let rx = -100, ry = -100
    let rafId

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }

    const tick = () => {
      dot.style.transform = `translate(${mx}px, ${my}px)`
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.transform = `translate(${rx}px, ${ry}px)`
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    rafId = requestAnimationFrame(tick)

    const hide = () => { dot.style.opacity = "0"; ring.style.opacity = "0" }
    const show = () => { dot.style.opacity = "1"; ring.style.opacity = "1" }
    document.addEventListener("mouseleave", hide)
    document.addEventListener("mouseenter", show)

    const down = () => ring.classList.add("scale-75")
    const up = () => ring.classList.remove("scale-75")
    window.addEventListener("mousedown", down)
    window.addEventListener("mouseup", up)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafId)
      document.removeEventListener("mouseleave", hide)
      document.removeEventListener("mouseenter", show)
      window.removeEventListener("mousedown", down)
      window.removeEventListener("mouseup", up)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "oklch(0.95 0.18 68)",
          boxShadow: "0 0 6px 2px oklch(0.83 0.19 68 / 0.9), 0 0 18px 4px oklch(0.74 0.21 48 / 0.5)",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2 will-change-transform transition-transform duration-100"
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid oklch(0.83 0.19 68 / 0.55)",
          boxShadow: "0 0 10px 2px oklch(0.83 0.19 68 / 0.2), inset 0 0 6px 1px oklch(0.83 0.19 68 / 0.08)",
        }}
      />
    </>
  )
}

export function SpotlightCursor() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e) => {
      el.style.setProperty("--mx", `${e.clientX}px`)
      el.style.setProperty("--my", `${e.clientY}px`)
      el.style.opacity = "1"
    }
    window.addEventListener("mousemove", move, { passive: true })
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-0 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(700px circle at var(--mx, -9999px) var(--my, -9999px), oklch(0.83 0.19 68 / 0.08), transparent 80%)",
      }}
    />
  )
}
