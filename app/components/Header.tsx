"use client"

import { useState, useEffect } from "react"
import { useTheme } from "./ThemeProvider"
import { Sun, Moon, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-2xl font-bold">
            JD
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Home
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Projects
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Skills
            </a>
            <a href="#contact" className="hover:text-primary transition-colors duration-300">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isScrolled ? "bg-muted" : "bg-background/50"} hover:bg-muted transition-colors duration-300`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
            <motion.button
              className={`md:hidden p-2 rounded-full ${isScrolled ? "bg-muted" : "bg-background/50"} hover:bg-muted transition-colors duration-300`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-muted"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Home
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Projects
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Skills
              </a>
              <a href="#contact" className="hover:text-primary transition-colors duration-300">
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

