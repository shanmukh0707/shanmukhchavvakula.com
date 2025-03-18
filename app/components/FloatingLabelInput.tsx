"use client"

import type React from "react"
import { motion } from "framer-motion"

interface FloatingLabelInputProps {
  id: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  label: string
}

export default function FloatingLabelInput({ id, type, value, onChange, label }: FloatingLabelInputProps) {
  const InputComponent = type === "textarea" ? "textarea" : "input"

  return (
    <motion.div
      className="relative mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <InputComponent
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="block w-full px-3 py-2 bg-background border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 peer"
        rows={type === "textarea" ? 4 : undefined}
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-muted-foreground duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        {label}
      </label>
    </motion.div>
  )
}

