"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SkillCardProps {
  name: string
  icon: ReactNode
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  description: string
  projects?: number
  yearsExperience?: number
}

export default function SkillCard({
  name,
  icon,
  level,
  description,
  projects = 0,
  yearsExperience = 0,
}: SkillCardProps) {
  // Map level to color and width
  const levelConfig = {
    Beginner: {
      color: "from-blue-400 to-blue-500",
      width: "w-1/4",
    },
    Intermediate: {
      color: "from-green-400 to-green-500",
      width: "w-2/4",
    },
    Advanced: {
      color: "from-yellow-400 to-yellow-500",
      width: "w-3/4",
    },
    Expert: {
      color: "from-primary to-purple-500",
      width: "w-full",
    },
  }

  const { color, width } = levelConfig[level]

  return (
    <motion.div
      className="bg-background/50 backdrop-blur-md border border-primary/10 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-primary text-2xl">{icon}</div>
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>

        <p className="text-muted-foreground mb-4 text-sm">{description}</p>

        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">{level}</span>
          <div className="flex items-center gap-2">
            {projects > 0 && (
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{projects} Projects</span>
            )}
            {yearsExperience > 0 && (
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                {yearsExperience} {yearsExperience === 1 ? "Year" : "Years"}
              </span>
            )}
          </div>
        </div>

        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${color}`}
            initial={{ width: 0 }}
            whileInView={{ width: width }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  )
}

