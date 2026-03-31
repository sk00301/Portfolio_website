'use client'

import { useEffect, useState } from 'react'

export default function LoadingAnimation() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [step, setStep] = useState(0)

  const lines = [
    '> initializing portfolio...',
    '> loading modules...',
    '> compiling assets...',
    '> ready.',
  ]

  useEffect(() => {
    const timers = []

    lines.forEach((_, i) => {
      timers.push(
        setTimeout(() => setStep(i + 1), i * 420 + 200)
      )
    })

    timers.push(
      setTimeout(() => setFadeOut(true), lines.length * 420 + 500)
    )
    timers.push(
      setTimeout(() => setVisible(false), lines.length * 420 + 1000)
    )

    return () => timers.forEach(clearTimeout)
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="w-full max-w-sm px-6">
        {/* Logo */}
        <div className="mb-8 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground">
            <span className="font-mono text-xs font-bold text-background">{'</>'}</span>
          </div>
          <span className="font-mono text-sm font-medium text-foreground">portfolio.dev</span>
        </div>

        {/* Terminal lines */}
        <div className="space-y-1 font-mono text-xs">
          {lines.map((line, i) => (
            <div
              key={i}
              className={`transition-all duration-300 ${
                i < step
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-1 opacity-0'
              } ${i === lines.length - 1 ? 'text-green-500 dark:text-green-400' : 'text-muted-foreground'}`}
            >
              {line}
            </div>
          ))}

          {/* Blinking cursor */}
          {step < lines.length && (
            <div className="inline-block h-3 w-1.5 animate-pulse bg-foreground" />
          )}
        </div>

        {/* Progress bar */}
        <div className="mt-6 h-px w-full overflow-hidden bg-border">
          <div
            className="h-full bg-foreground transition-all duration-300 ease-out"
            style={{ width: `${(step / lines.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
