"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Code2,
  GraduationCap,
  GitFork,
  Book,
  Terminal,
  Award,
  Database,
  Server,
  Cpu,
  Layers,
  PenTool,
} from "lucide-react"
import Layout from "./components/Layout"
import ProjectCard from "./components/ProjectCard"
import FloatingLabelInput from "./components/FloatingLabelInput"
import TypeWriter from "./components/TypeWriter"
import FloatingBox from "./components/FloatingBox"
import StatBox from "./components/StatBox"
import AnimatedTitle from "./components/AnimatedTitle"
import PageLoader from "./components/PageLoader"
import { ThemeProvider } from "./components/ThemeProvider"
import SkillCard from "./components/SkillCard"

export default function Home() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <ThemeProvider>
      <PageLoader />
      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"
            style={{ y: backgroundY }}
          />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  John Doe
                </h1>
                <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground h-8 mb-12 flex pl-4">
                  <TypeWriter
                    words={[
                      "Computer Science Student",
                      "Frontend Developer",
                      "Open Source Contributor",
                      "Tech Enthusiast",
                      "Learning Web3",
                    ]}
                    speed={50}
                    delay={2000}
                  />
                </div>
                <motion.div
                  className="flex flex-wrap gap-4 justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.a
                    href="#projects"
                    className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View My Projects
                  </motion.a>
                  <motion.a
                    href="#contact"
                    className="bg-background/50 backdrop-blur-sm border border-primary/10 text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-background/80 transition-all duration-300 hover:shadow-lg inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in Touch
                  </motion.a>
                </motion.div>
              </motion.div>
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <FloatingBox delay={0.2} className="col-span-1 sm:col-span-2">
                  <h3 className="text-lg font-semibold mb-2">About Me</h3>
                  <p className="text-muted-foreground">
                    Computer Science student at University XYZ, passionate about web development and open source
                    contribution. Currently exploring modern web technologies and building projects to enhance my
                    skills.
                  </p>
                </FloatingBox>
                <FloatingBox delay={0.4}>
                  <div className="flex items-center gap-4">
                    <GraduationCap className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">3.8 GPA</h3>
                      <p className="text-sm text-muted-foreground">Dean's List</p>
                    </div>
                  </div>
                </FloatingBox>
                <FloatingBox delay={0.6}>
                  <div className="flex items-center gap-4">
                    <GitFork className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Open Source</h3>
                      <p className="text-sm text-muted-foreground">Contributor</p>
                    </div>
                  </div>
                </FloatingBox>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <AnimatedTitle
                text="Achievements"
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatBox
                number="10+"
                label="Projects Completed"
                sublabel="Including 3 team projects"
                icon={<Terminal className="w-6 h-6" />}
                delay={0.1}
              />
              <StatBox
                number="5"
                label="Programming Languages"
                sublabel="HTML, CSS, JavaScript, Java, SQL"
                icon={<Code2 className="w-6 h-6" />}
                delay={0.2}
              />
              <StatBox
                number="3"
                label="Certifications"
                sublabel="AWS, Meta Frontend, Google IT"
                icon={<Award className="w-6 h-6" />}
                delay={0.3}
              />
              <StatBox
                number="4"
                label="Hackathons"
                sublabel="2 winning projects"
                icon={<Book className="w-6 h-6" />}
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <motion.section id="projects" className="py-20 px-4 md:px-8 relative">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <AnimatedTitle
                text="Projects"
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Student Portal"
                description="A web app for managing course schedules and assignments. Built with HTML, CSS, and JavaScript."
                image="/placeholder.svg?height=200&width=300"
              />
              <ProjectCard
                title="Weather Dashboard"
                description="Real-time weather tracking app using OpenWeather API and JavaScript."
                image="/placeholder.svg?height=200&width=300"
              />
              <ProjectCard
                title="Task Manager"
                description="A simple todo application with user authentication using Node.js and MongoDB."
                image="/placeholder.svg?height=200&width=300"
              />
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section className="py-20 px-4 md:px-8 relative">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <AnimatedTitle
                text="Skills"
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              />
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Frontend</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCard
                  name="HTML & CSS"
                  icon={<Code2 />}
                  level="Intermediate"
                  description="Creating responsive layouts and styling web applications."
                  projects={3}
                />
                <SkillCard
                  name="JavaScript"
                  icon={<Layers />}
                  level="Intermediate"
                  description="Building interactive web applications with vanilla JavaScript."
                  projects={2}
                />
                <SkillCard
                  name="React"
                  icon={<PenTool />}
                  level="Beginner"
                  description="Learning component-based UI development with React."
                  projects={1}
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Backend & Other</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCard
                  name="Java"
                  icon={<Cpu />}
                  level="Intermediate"
                  description="Object-oriented programming and testing with Java."
                  projects={2}
                />
                <SkillCard
                  name="Node.js & MongoDB"
                  icon={<Server />}
                  level="Beginner"
                  description="Building simple backend services with Node.js and MongoDB."
                  projects={1}
                />
                <SkillCard
                  name="SQL"
                  icon={<Database />}
                  level="Beginner"
                  description="Basic database design and querying with SQL."
                  projects={1}
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section id="contact" className="py-20 px-4 md:px-8 relative">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <AnimatedTitle
                text="Contact"
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              />
            </div>
            <FloatingBox className="max-w-lg mx-auto">
              <form>
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
            </FloatingBox>
          </div>
        </motion.section>

        <footer className="bg-muted/50 backdrop-blur-sm py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 John Doe. All rights reserved.</p>
          </div>
        </footer>
      </Layout>
    </ThemeProvider>
  )
}

