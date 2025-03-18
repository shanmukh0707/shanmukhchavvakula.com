"use client"

import { useState } from "react"
import Layout from "../components/Layout"
import FloatingLabelInput from "../components/FloatingLabelInput"
import { motion } from "framer-motion"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <Layout>
      <motion.section className="py-20 px-4 md:px-8 pl-16" {...fadeInUp} viewport={{ once: false }}>
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center">Contact Me</h1>
          <form className="max-w-lg mx-auto">
            <FloatingLabelInput
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Name"
            />
            <FloatingLabelInput
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
            />
            <FloatingLabelInput
              id="message"
              type="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              label="Message"
            />
            <motion.button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg mt-4 text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.section>
    </Layout>
  )
}

