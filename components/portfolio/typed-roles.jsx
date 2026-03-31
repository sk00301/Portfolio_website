"use client"

import { useEffect, useState } from "react"

const roles = [
  "Full-Stack Developer",
  "AI Research Enthusiast",
  "ML Engineer",
  "Data Scientist",
]

export function TypedRoles() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [phase, setPhase] = useState("typing")

  useEffect(() => {
    const current = roles[index]
    let timeout

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setPhase("waiting"), 1800)
      }
    } else if (phase === "waiting") {
      timeout = setTimeout(() => setPhase("deleting"), 400)
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setIndex((i) => (i + 1) % roles.length)
        setPhase("typing")
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, phase, index])

  return (
    <span className="text-primary font-semibold">
      {displayed}
      <span
        className="inline-block ml-0.5 w-0.5 h-[1em] bg-primary align-middle animate-[blink_1s_step-end_infinite]"
        aria-hidden="true"
      />
    </span>
  )
}
