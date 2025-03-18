"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useTheme } from "./ThemeProvider"
import { Sun, Moon, Menu, X } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isThemeChanging, setIsThemeChanging] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  const navProgress = useTransform(scrollY, [0, window.innerHeight - 100], [0, 1])

  const horizontalNavOpacity = useTransform(navProgress, [0, 0.5], [1, 0])
  const verticalNavOpacity = useTransform(navProgress, [0.5, 1], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleThemeToggle = () => {
    setIsThemeChanging(true)
    toggleTheme()
    setTimeout(() => setIsThemeChanging(false), 1000)
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ]

  // Only show vertical nav on desktop and when scrolled
  const showVerticalNav = isScrolled && window.innerWidth >= 1024

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Mobile Menu Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden fixed left-4 top-4 z-50 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-primary/10"
          >
            <Menu size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            className="fixed inset-0 z-50 lg:hidden bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="text-2xl font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                  JD
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                  <X size={24} />
                </button>
              </div>
              <nav className="flex-1">
                <ul className="space-y-6">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`text-xl ${pathname === item.href ? "text-primary" : ""}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <motion.button
                onClick={handleThemeToggle}
                className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Vertical Nav */}
      <AnimatePresence>
        {showVerticalNav && (
          <motion.nav
            style={{ opacity: verticalNavOpacity }}
            className="hidden lg:flex fixed left-0 top-0 bottom-0 z-40 w-36 transition-colors duration-300 bg-background/10 backdrop-blur-sm"
            initial={{ width: 0 }}
            animate={{ width: "9rem" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col h-full py-8 px-4">
              <Link href="/" className="text-2xl font-bold mb-8 text-center">
                JD
              </Link>
              <ul className="flex-1 space-y-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`relative text-base transition-colors duration-200 hover:text-primary ${
                        pathname === item.href ? "text-primary" : ""
                      } group block text-center`}
                    >
                      {item.name}
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
                    </Link>
                  </li>
                ))}
              </ul>
              <motion.button
                onClick={handleThemeToggle}
                className="relative p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors duration-300 overflow-hidden mx-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                {isThemeChanging && (
                  <motion.div
                    className="absolute inset-0 bg-primary/20"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                )}
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Horizontal Nav (Initial) */}
      <motion.nav
        style={{ opacity: horizontalNavOpacity }}
        className="fixed top-0 left-0 right-0 z-40 bg-background/10 backdrop-blur-sm pointer-events-auto"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold">
              JD
            </Link>
            <ul className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`relative text-lg transition-colors duration-200 hover:text-primary ${
                      pathname === item.href ? "text-primary" : ""
                    } group`}
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
            <motion.button
              onClick={handleThemeToggle}
              className="p-2 rounded-full bg-background/50 hover:bg-muted transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <main className={`flex-1 ${showVerticalNav ? "lg:ml-36" : ""} transition-[margin] duration-300`}>{children}</main>
    </div>
  )
}

