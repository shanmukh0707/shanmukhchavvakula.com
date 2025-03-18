"use client"

import type { ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  offset?: number
  direction?: "up" | "down"
}

export default function ParallaxSection({ children, className = "" }: ParallaxSectionProps) {
  // No parallax effect, just return the children with the className
  return <div className={className}>{children}</div>
}

