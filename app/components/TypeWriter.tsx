"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypeWriterProps {
  words: string[]
  speed?: number
  delay?: number
}

export default function TypeWriter({ words, speed = 50, delay = 2000 }: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState("")

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const type = () => {
      const currentWord = words[currentWordIndex]

      if (!isDeleting) {
        if (text.length < currentWord.length) {
          // Typing effect
          const nextChar = currentWord.charAt(text.length)
          setText(text + nextChar)
          timeout = setTimeout(type, Math.random() * 100 + speed) // Random delay for realistic typing
        } else {
          // Wait before starting to delete
          timeout = setTimeout(() => setIsDeleting(true), delay)
        }
      } else {
        if (text.length > 0) {
          // Deleting effect
          setText(text.slice(0, -1))
          timeout = setTimeout(type, speed / 2) // Faster deletion
        } else {
          setIsDeleting(false)
          setCurrentWordIndex((current) => (current + 1) % words.length)
        }
      }
    }

    timeout = setTimeout(type, speed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, currentWordIndex, words, speed, delay])

  return (
    <div className="h-8 flex items-center justify-center">
      <span className="inline-block">
        {text}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="inline-block ml-1 w-0.5 h-6 bg-primary align-middle"
        />
      </span>
    </div>
  )
}

