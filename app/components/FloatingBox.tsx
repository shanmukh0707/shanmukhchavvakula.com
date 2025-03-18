"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingBoxProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function FloatingBox({ children, delay = 0, className = "" }: FloatingBoxProps) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <motion.div
      className={`relative backdrop-blur-lg bg-background/30 border border-background/10 rounded-2xl p-6 shadow-xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay }}
      style={{ y }}
    >
      {children}
    </motion.div>
  )
}

