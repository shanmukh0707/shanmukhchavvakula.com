"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedTitleProps {
  text: string
  className?: string
}

export default function AnimatedTitle({ text, className = "" }: AnimatedTitleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <div className="relative overflow-hidden py-8">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          className={`text-6xl md:text-8xl font-bold ${className}`}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 100,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {text}
        </motion.h2>
      </div>
    </div>
  )
}

