"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StatBoxProps {
  number: string
  label: string
  sublabel?: string
  icon?: ReactNode
  delay?: number
}

export default function StatBox({ number, label, sublabel, icon, delay = 0 }: StatBoxProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-primary/5 backdrop-blur-sm p-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
      <motion.div
        className="relative z-10"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        {icon && <div className="text-primary mb-4">{icon}</div>}
        <motion.h3
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
        >
          {number}
        </motion.h3>
        <motion.p
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: delay + 0.6 }}
        >
          {label}
        </motion.p>
        {sublabel && (
          <motion.p
            className="text-sm text-muted-foreground/80 mt-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: delay + 0.8 }}
          >
            {sublabel}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  )
}

