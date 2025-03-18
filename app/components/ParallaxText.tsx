"use client"

import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxTextProps {
  children: string
  className?: string
}

export default function ParallaxText({ children, className = "" }: ParallaxTextProps) {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <div className="relative overflow-hidden py-8 mt-16 sm:mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary/40 to-secondary/40 ${className}`}
          style={{ x }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}

